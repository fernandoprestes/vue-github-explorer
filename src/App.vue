<script setup lang="ts">
  import DialogFactory from '~/components/Dialog/index.vue';

  import TheHeader from '~/components/TheHeader/index.vue';
</script>
<template>
  <DialogFactory />
  <TheHeader />
  <main class="container h-[calc(100vh-4rem)]">
    <router-view />
  </main>
</template>
