<script lang="ts" setup>
import RowItem from '@/components/RowItem.vue';

defineProps({
  items: {type: Array, default: () => []}
})
</script>
<template>
  <div class="rows-list">
    <RowItem v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>


<style scoped>
.rows-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
}
</style>