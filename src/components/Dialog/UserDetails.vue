<script setup lang="ts">
  import { computed, inject, onMounted, reactive, ref } from 'vue';
  import { useReposStore } from '~/store/Repos';
  import type { Repos } from '~/@types/GithubRepos';
  import type { User } from '~/@types/GithubUsers';
  import type UserGateway from '~/infra/gateway/UserGateway';

  const userGateway = inject('userGateway') as UserGateway;

  const { toggleFavoriteRepo, hasRepoInFavoritesRepos } = useReposStore();

  interface Props {
    objData: { username: string };
  }
  const props = defineProps<Props>();

  const data = reactive({
    user: {} as User,
    repos: {} as Repos[],
  });

  const maxUserPublicRepos = computed(() => data.user.public_repos <= data.repos.length);

  const perPage = ref(6);
  const handleClickButtonMoreSearch = async () => {
    if (maxUserPublicRepos.value) return;
    perPage.value += 6;
    data.repos = await userGateway.getGithubUserRepos(props.objData.username, perPage.value);
  };

  onMounted(async () => {
    data.user = await userGateway.getGithubUser(props.objData.username);
    data.repos = await userGateway.getGithubUserRepos(props.objData.username, perPage.value);
  });
</script>

<template>
  <div
    class="md:(grid-cols-[200px_minmax(0px,1fr)] w-[600px]) grid h-[680px] w-[360px] gap-4 md:h-[520px] lg:w-[920px]"
  >
    <div>
      <img
        class="mx-auto h-40 w-40 rounded-full"
        :src="data.user.avatar_url"
        :alt="`github avatar ${data.user.login}`"
      />
      <h2 class="text-xl font-semibold">{{ data.user.login }}</h2>
      <h3>{{ data.user.name }}</h3>
      <p class="mt-2 mb-1 flex items-center gap-2 text-sm">
        {{ data.user.bio }}
      </p>
      <div class="flex items-center gap-2 text-sm">
        <div class="i-ph-map-pin h-4 w-4" />
        <span>
          {{ data.user.location }}
        </span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <div class="i-ph-buildings-light h-4 w-4" />
        <span>
          {{ data.user.company }}
        </span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <div class="i-ph-users h-4 w-4" />
        <span>
          {{ data.user.followers }}
        </span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <div class="i-ph-users-three h-4 w-4" />
        <span>
          {{ data.user.following }}
        </span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <div class="i-ph-envelope h-4 w-4" />
        <span>
          {{ data.user.email }}
        </span>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <div class="i-ph-folder h-4 w-4" />
        <span>
          {{ data.user.public_repos }}
        </span>
      </div>
    </div>
    <div class="flex h-full flex-col gap-2 overflow-auto">
      <TransitionGroup
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in"
        appear
      >
        <div v-if="data.repos.length === 0">
          <p>Esse usuário não possui repositório públicos.</p>
        </div>
        <div
          v-for="repo in data.repos"
          v-else
          :key="repo.id"
          class="border-gray-3 flex flex-col flex-wrap border p-2"
        >
          <div class="flex justify-between">
            <h2 class="text-xl font-bold">{{ repo.name }}</h2>
            <button @click="toggleFavoriteRepo(repo)">
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

      <button
        v-if="!maxUserPublicRepos"
        class="border-gray-3 rounded border px-2 py-4"
        @click="handleClickButtonMoreSearch"
      >
        Carregar mais
      </button>
    </div>
  </div>
</template>
