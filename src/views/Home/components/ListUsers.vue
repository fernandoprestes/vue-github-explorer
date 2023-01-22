<script setup lang="ts">
  import { ref } from 'vue';
  import { data, handleSearchGithubUser } from '../useData';

  import useDialog from '~/composables/useDialog';

  const dialog = useDialog();

  const perPage = ref(5);
  const handleClickButtonMoreSearch = () => {
    perPage.value += 5;
    handleSearchGithubUser(perPage.value);
  };
  const handleBackPage = () => {
    data.user = [];
  };

  const handleSelectedSingleUser = async (username: string) => {
    dialog.open({ component: 'DialogUserDetails', props: { username: username } });
  };
</script>

<template>
  <div class="pt-10">
    <button @click="handleBackPage">
      <div class="i-ph-arrow-left-bold h-6 w-6" />
    </button>
    <div class="flex flex-col gap-4 pb-8">
      <TransitionGroup
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in"
        appear
      >
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
          <h2
            class="text-xl font-bold"
            @click="handleSelectedSingleUser(user.login)"
          >
            {{ user.login }}
          </h2>
        </div>
      </TransitionGroup>
      <button
        class="border-gray-3 rounded border px-2 py-4"
        @click="handleClickButtonMoreSearch"
      >
        Buscar mais
      </button>
    </div>
  </div>
</template>
