<template>
  <header class="bg-gray-3 py-4">
    <div class="lg:(px-none) container flex justify-between px-4">
      <div class="flex items-end gap-2">
        <h1 class="text-2xl font-bold">Github</h1>
        <i class="text-2xl">Search</i>
      </div>
      <div class="flex items-center gap-4 text-xl">
        <router-link :to="{ name: 'Home' }">Inicio</router-link>
        <router-link :to="{ name: 'Favorites' }">Favoritos</router-link>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
  .router-link-exact-active {
    color: #db4141;
    font-weight: 700;
  }
</style>
