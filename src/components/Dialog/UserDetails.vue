<script setup lang="ts">
  import { inject, onMounted, reactive } from 'vue';
  import type { User } from '~/@types/GithubUsers';
  import type UserGateway from '~/infra/gateway/UserGateway';

  const userGateway = inject('userGateway') as UserGateway;

  interface Props {
    objData: { username: string };
  }
  const props = defineProps<Props>();

  const data = reactive({
    user: {} as User,
  });

  onMounted(async () => {
    data.user = await userGateway.getGithubUser(props.objData.username);
  });
</script>

<template>
  <div class="md:(grid-cols-[200px_minmax(720px,_1fr)] w-[600px]) grid w-[360px] gap-4 lg:w-[920px]">
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
    <div>asdaasdasdsdas</div>
  </div>
</template>
