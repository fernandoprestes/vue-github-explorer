<script lang="ts" setup>
  import { inject, onMounted, reactive } from 'vue';
  import type UserGateway from '~/infra/gateway/UserGateway';

  const userGateway = inject('userGateway') as UserGateway;

  const data = reactive({
    isLoading: true,
    user: {} as any,
  });

  onMounted(async () => {
    data.user = await userGateway.getGithubUser('fernandoprestes');
    data.isLoading = false;
  });
</script>

<template>
  <div></div>
</template>
