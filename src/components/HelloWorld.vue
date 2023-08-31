<script setup lang="ts">

import { useAclStore } from '../store/modules/acl'
const { getRole } = useAclStore()
defineProps<{ msg: string }>()

</script>

<template>
  {{ getRole }}
  <vabIcon
    icon="404"
    is-custom-svg
  />
  <vab-icon icon="lock-password-line" />
  <vab-icon icon="arrow-right-up-line" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
