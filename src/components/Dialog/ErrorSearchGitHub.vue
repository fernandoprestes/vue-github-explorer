<script lang="ts" setup>
  import useDialog from '~/composables/useDialog';

  const dialog = useDialog();
</script>
<template>
  <div class="flex w-[360px] flex-col items-center">
    <div class="i-ph-info-fill h-36 w-36 text-red-400" />
    <div class="mt-6 flex flex-col items-center gap-6">
      <h2 class="text-4xl font-bold">Desculpe!</h2>
      <p class="w-[260px] text-center">Não foi possível encontrar o repositório ou usuário desejado!</p>
      <button
        class="bg-gray-9 border-gray-9 flex items-center justify-between rounded border px-6 py-2 text-white"
        @click="dialog.close"
      >
        OK
      </button>
    </div>
  </div>
</template>
