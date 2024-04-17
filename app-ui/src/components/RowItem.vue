<script lang="ts" setup>
defineProps({
  item: { type: Object as () => ({ title: string }), required: true }
})
</script>
<template>
  <div class="row-item">
    <h3>{{ item.title }}</h3>
  </div>
</template>
<style scoped>
.row-item {
  padding: var(--spacing);
  border-radius: var(--spacing);
}
</style>