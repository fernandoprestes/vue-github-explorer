<script setup lang="ts">
  import TheHeader from '~/components/TheHeader/index.vue';
</script>
<template>
  <TheHeader />
  <main class="container h-[calc(100vh-4rem)]">
    <router-view />
  </main>
</template>
