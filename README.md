# VF Vue 3 slots

## Problématique

Vue = projets avec API
Comment bien développer sans données

Solution : les slots

### Avantages

* Non dépendant de la data
* Moins de props
* Très lisible au niveau du code

### Désavantage

* Moins TS proof
* Pas de required

## Les bases

[Documentation slots](https://vuejs.org/guide/components/slots.html#slot-content-and-outlet)

## Slot de base

Composant bouton

```html
<slot />
```

## Slot nommé

Composant bouton avec slot icon

```html
<slot name="icon" />

<slot />
<slot name="default" />
```

## Slot dynamique (osef tier)

```html
<slot :name="variable" />

<template v-slot:[variable] />
```

## Slot dans un slot

```html
<template v-slot:default>
  <slot />
</template>
```

## Slot avec portée

```html
<slot :index="index"/>

<template v-slot:default="{ index }">
  {{ index }}
</template>
```

## $slots

```html
<p v-if="$slots.default">
  <slot />
</p>
```

## useSlots

```html
<script setup lang="ts">
import { useSlots, computed } from 'vue'

/** Get the slots to check which is on */
const slots = useSlots()

const hasSlot = computed(() => slots.default)
</script>
```

## Slot et iterations

```html
<ul>
  <li v-for="(_, index) in Array(length)">
    <slot :name="`name${index}`" />
  </li>  
</ul>


<Component>
  <template
    v-for="(item, index) in items"
    :key="..."
    v-slot:[`name${index}`]
  >
    {{ item }}
  </template>
</Component>
```

```html
<ul>
  <li v-for="(_, index) in Array(length)">
    <slot
      name="name"
      :index="index"
    />
  </li>  
</ul>


<Component>
  <template v-slot:name={ index }>
    {{ index }}
  </template>
</Component>
```
