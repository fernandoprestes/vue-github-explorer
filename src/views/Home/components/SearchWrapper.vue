<script setup lang="ts">
  import { data } from '../useData';

  import SearchTypeoptions from './SearchTypeOptions.vue';
  import SearchInputRepos from './SearchInputRepos.vue';
  import SearchInputUser from './SearchInputUser.vue';

  const inputsInstance: any = {
    SearchInputRepos,
    SearchInputUser,
  };
</script>

<template>
  <div class="mt-10 flex flex-col items-center">
    <SearchTypeoptions />
    <component :is="inputsInstance[data.optionSelected]" />
  </div>
</template>
