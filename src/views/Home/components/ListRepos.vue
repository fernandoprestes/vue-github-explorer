<script setup lang="ts">
  import { ref } from 'vue';
  import { useReposStore } from '~/store/Repos';

  import { data, handleSearchGithubRepos } from '../useData';

  const { toggleFavoriteRepo, hasRepoInFavoritesRepos } = useReposStore();

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
    <button @click="handleBackPage">
      <div class="i-ph-arrow-left-bold h-6 w-6" />
    </button>
    <div class="flex flex-col gap-4 pb-8">
      <div
        v-for="repo in data.repos"
        :key="repo.id"
        class="border-gray-3 pa-2 flex flex-col items-start gap-2 rounded border"
      >
        <div class="flex w-full justify-between">
          <h2>
            {{ repo.name }}
          </h2>
          <button @click="toggleFavoriteRepo(repo)">
            <div
              class="bg-amber h-6 w-6"
              :class="hasRepoInFavoritesRepos(repo.id) ? 'i-ph-star-fill' : 'i-ph-star'"
            />
          </button>
        </div>
        <p>
          {{ repo.description }}
        </p>
        <div class="flex items-center gap-2">
          <div class="i-ph-star" />
          {{ repo.stargazers_count }}
        </div>
      </div>
      <button
        class="border-gray-3 rounded border px-2 py-4"
        @click="handleClickButtonMoreSearch"
      >
        Buscar mais
      </button>
    </div>
  </div>
</template>
