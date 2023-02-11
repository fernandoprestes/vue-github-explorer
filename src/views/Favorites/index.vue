<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import { useReposStore } from '~/store/Repos';

  import FavoritesEmptyMessage from './components/FavoritesEmptyMessage.vue';
  import FavoritesList from './components/FavoritesList.vue';

  const storeRepos = useReposStore();
  const { isFavoritesReposEmpty } = storeToRefs(storeRepos);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentsInstance: any = {
    FavoritesEmptyMessage,
    FavoritesList,
  };

  const componentRender = computed(() => {
    return isFavoritesReposEmpty.value ? 'FavoritesEmptyMessage' : 'FavoritesList';
  });
</script>

<template>
  <div class="pt-10">
    <Transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutDown"
      mode="out-in"
      appear
    >
      <component :is="componentsInstance[componentRender]" />
    </Transition>
  </div>
</template>
