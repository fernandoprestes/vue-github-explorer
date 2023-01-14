<script setup lang="ts">
  import { data } from '../useData';

  const searchOptionsSelect = [
    {
      id: '1',
      label: 'Repositório',
      value: 'SearchInputRepos',
    },
    {
      id: '2',
      label: 'Usuário',
      value: 'SearchInputUser',
    },
  ];
</script>

<template>
  <div class="flex items-center gap-4">
    <div
      v-for="item in searchOptionsSelect"
      :key="item.id"
      class="text-gray-9 border-gray-9 relative mb-2 flex items-center justify-between rounded border"
      :class="{ 'bg-gray-9 text-white': data.optionSelected === item.value }"
    >
      <input
        :id="item.id"
        v-model="data.optionSelected"
        :value="item.value"
        :name="item.id"
        type="radio"
        class="sr-only"
      />
      <label
        :for="item.id"
        class="cursor-pointer p-1 text-sm font-bold md:py-2 md:px-4 md:text-base"
        :class="{ 'pointer-events-none': data.optionSelected === item.value }"
      >
        {{ item.label }}
      </label>
    </div>
  </div>
</template>
