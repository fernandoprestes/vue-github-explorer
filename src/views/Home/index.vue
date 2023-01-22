<script lang="ts" setup>
  import { data } from './useData';

  import { computed } from 'vue';

  import SearchWrapper from './components/SearchWrapper.vue';
  import ListUsers from './components/ListUsers.vue';
  import ListRepos from './components/ListRepos.vue';

  const componentsInstance: any = {
    SearchWrapper,
    ListUsers,
    ListRepos,
  };

  const componentRender = computed(() => {
    if (data.user.length && data.optionSelected === 'SearchInputUser') return 'ListUsers';
    if (data.repos.length && data.optionSelected === 'SearchInputRepos') return 'ListRepos';
    return 'SearchWrapper';
  });
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutDown"
    mode="out-in"
    appear
  >
    <component :is="componentsInstance[componentRender]" />
  </Transition>
</template>
