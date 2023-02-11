<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useReposStore } from '~/store/Repos';

  const storeRepos = useReposStore();
  const { favoritesReposList } = storeToRefs(storeRepos);
  const { removeFromFavoriteRepo, hasRepoInFavoritesRepos } = storeRepos;

  const handleRemoveFavorite = (repoId: number) => {
    removeFromFavoriteRepo(repoId);
  };
</script>

<template>
  <div class="flex flex-col gap-4 pb-8">
    <TransitionGroup
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutDown"
      mode="out-in"
      appear
    >
      <div
        v-for="repo in favoritesReposList"
        :key="repo.id"
        class="border-gray-3 flex flex-col flex-wrap border p-2"
      >
        <div class="flex justify-between">
          <h2 class="text-xl font-bold">{{ repo.name }}</h2>
          <button @click="handleRemoveFavorite(repo.id)">
            <div
              class="bg-amber h-6 w-6"
              :class="hasRepoInFavoritesRepos(repo.id) ? 'i-ph-star-fill' : 'i-ph-star'"
            />
          </button>
        </div>

        <h3 class="text-sm">{{ repo.full_name }}</h3>
        <p>{{ repo.description }}</p>
      </div>
    </TransitionGroup>
  </div>
</template>
