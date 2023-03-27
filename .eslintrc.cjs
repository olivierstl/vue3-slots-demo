/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
    // Gère l'ordre de tous les plugins installés
    'alsacreations'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/prefer-function-type': 'off',
    'vue/custom-event-name-casing': ['error', 'kebab-case']
  }
}
