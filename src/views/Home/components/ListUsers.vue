<script setup lang="ts">
  import { ref } from 'vue';
  import { data, handleSearchGithubUser } from '../useData';

  const perPage = ref(5);
  const handleClickButtonMoreSearch = () => {
    perPage.value += 5;
    handleSearchGithubUser(perPage.value);
  };
  const handleBackPage = () => {
    data.user = [];
  };
</script>

<template>
  <div class="mt-10">
    <button @click="handleBackPage">Voltar</button>
    <div class="flex flex-col gap-4">
      <div
        v-for="user in data.user"
        :key="user.id"
        class="border-gray-3 pa-2 flex items-start gap-2 rounded border"
      >
        <img
          :src="user.avatar_url"
          :alt="`avatar github user ${user.login}`"
          class="h-20 w-20 rounded-full"
        />
        <a
          :href="`https://github.com/${user.login}`"
          target="_blank"
        >
          <h2 class="text-xl font-bold">{{ user.login }}</h2>
        </a>
      </div>
      <button @click="handleClickButtonMoreSearch">Buscar mais</button>
    </div>
  </div>
</template>
