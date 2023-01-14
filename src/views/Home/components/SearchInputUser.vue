<script setup lang="ts">
  import { data, handleSearchGithubUser } from '../useData';
</script>

<template>
  <div class="border-gray-9 relative flex justify-between gap-1 rounded border px-3 py-2">
    <input
      v-model="data.searchInput"
      type="text"
      placeholder="Buscar usuário"
      class="focus:outline-none"
    />
    <button @click="handleSearchGithubUser()">
      <div class="i-ph-magnifying-glass h-6 w-6 font-bold" />
    </button>
  </div>
</template>
