<template>
  <header class="bg-gray-3 py-4">
    <div class="lg:(px-none) container flex justify-between px-4">
      <div class="flex items-end gap-2">
        <h1 class="text-2xl font-bold">Github</h1>
        <i class="text-2xl">Search</i>
      </div>
      <div class="flex items-center gap-4 text-xl">
        <router-link :to="{ name: 'HomePage' }">Inicio</router-link>
        <router-link :to="{ name: 'FavoritesPage' }">Favoritos</router-link>
      </div>
    </div>
  </header>
  <main class="container h-[calc(100vh-4rem)]">
    <router-view />
  </main>
</template>
<style scoped lang="scss">
  .router-link-exact-active {
    color: #db4141;
    font-weight: 700;
  }
</style>
