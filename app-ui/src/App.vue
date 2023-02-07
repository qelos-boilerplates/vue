<script setup lang="ts">
import {useAuth} from '@/stores/auth';
const auth = useAuth();
</script>

<template>
  <main v-if="auth.user">
    <TheWelcome />
  </main>
</template>

<style scoped>

</style>
