<script lang="ts" setup>
import RowItem from '@/components/RowItem.vue';

const props = defineProps({
  items: { type: Array as () => Array<{ title: string, id: string }>, default: () => [], required: true }
})
</script>
<template>
  <div class="rows-list">
    <RowItem v-for="item in props.items" :key="item.id" :item="item"/>
  </div>
</template>


<style scoped>
.rows-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
}
</style>