module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ecmaVersion: 12,
      js: 'espree',
      ts: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: false,
  },
  // 规则参考 https://eslint.nodejs.cn/docs/latest/rules/
  // eslint-plugin-vue https://eslint.vuejs.org/rules/first-attribute-linebreak.html
  //typescript-eslint https://typescript-eslint.io/rules/
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'prefer-rest-params': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/one-component-per-file': 'off',
    'prefer-const': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names':'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
}
