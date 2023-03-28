<template>
  <main
    role="main"
    class="main-wrapper"
  >
    <h1>Les slots dans Vue 3</h1>

    <button
      type="button"
      class="button"
      v-on:click="showSlots = !showSlots"
    >
      slots {{ showSlots ? 'on' : 'off' }}
    </button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showSlots = ref(false)

const pizzas = [
  {
    name: 'Margherita',
    description: `tomate, mozzarella, basilic, huile d'olive`
  },
  {
    name: 'Napolitaine',
    description: `tomate, mozzarella, anchois, olives noires, origan, huile d'olive`
  },
  {
    name: 'Quatre fromages',
    description: `tomate, mozzarela, parmesan, chèvre, gorgonzola`
  }
]

const slides = [
  {
    image:
      'https://image-tc.galaxy.tf/wijpeg-dwuiyn3l0ybfr3ouwdygsyqxp/rakabtw-m3yuhipgmsy-unsplash_standard.jpg?crop=0%2C438%2C1500%2C1125',
    video: '',
    thumbnail:
      'https://image-tc.galaxy.tf/wijpeg-dwuiyn3l0ybfr3ouwdygsyqxp/rakabtw-m3yuhipgmsy-unsplash_wide.jpg?crop=0%2C578%2C1500%2C844'
  },
  {
    image:
      'https://image-tc.galaxy.tf/wijpeg-80po6qjfuo7l83vbtcmtm7a40/steven-van-elk-o1momucrywu-unsplash-1_wide.jpg?crop=0%2C300%2C640%2C360',
    video: '',
    thumbnail:
      'https://image-tc.galaxy.tf/wijpeg-80po6qjfuo7l83vbtcmtm7a40/steven-van-elk-o1momucrywu-unsplash-1_wide.jpg?crop=0%2C300%2C640%2C360'
  },
  {
    image:
      'https://image-tc.galaxy.tf/wijpeg-5coksb4ytjvyy6ydf7gr7whbs/roberto-nickson-ma82mpizegi-unsplash_wide.jpg?crop=0%2C100%2C1920%2C1080',
    video: '',
    thumbnail:
      'https://image-tc.galaxy.tf/wijpeg-5coksb4ytjvyy6ydf7gr7whbs/roberto-nickson-ma82mpizegi-unsplash_wide.jpg?crop=0%2C100%2C1920%2C1080'
  }
]

const tabs = ref([
  {
    name: 'Tab 1',
    content: 'Tab 1 content'
  },
  {
    name: 'Tab 2',
    content: 'Tab 2 content'
  },
  {
    name: 'Tab 3',
    content: 'Tab 3 content'
  }
])
</script>

<style>
@import '@/assets/main.css';
</style>
