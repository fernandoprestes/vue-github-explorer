<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center pt-10">
    <h1 class="text-4xl font-bold">404</h1>
    <h2>Pagina não encontrada</h2>
    <RouterLink
      :to="{ name: 'Home' }"
      class="underline"
      >Voltar</RouterLink
    >
  </div>
</template>
