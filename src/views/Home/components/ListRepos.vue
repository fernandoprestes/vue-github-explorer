<script setup lang="ts">
  import { ref } from 'vue';
  import { data, handleSearchGithubRepos } from '../useData';

  const perPage = ref(5);
  const handleClickButtonMoreSearch = () => {
    perPage.value += 5;
    handleSearchGithubRepos(perPage.value);
  };
  const handleBackPage = () => {
    data.repos = [];
  };
</script>

<template>
  <div class="pt-10">
    <button @click="handleBackPage">Voltar</button>
    <div class="flex flex-col gap-4">
      <div
        v-for="repo in data.repos"
        :key="repo.id"
        class="border-gray-3 pa-2 flex items-start gap-2 rounded border"
      >
        {{ repo.name }}
        {{ repo.description }}
        {{ repo.stargazers_count }}
      </div>
      <button @click="handleClickButtonMoreSearch">Buscar mais</button>
    </div>
  </div>
</template>
