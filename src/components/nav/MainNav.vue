<script setup lang="ts">

</script>

<template>
  <header class="mb-10  w-full fixed top-0 bg-zinc-200 dark:bg-zinc-900">
    <div class="flex items-center justify-between max-w-sm mx-auto py-4">
      <NuxtLink
        to="/" class="font-bold"
      >
        Ale.Pinheiro
      </NuxtLink>
      <div class="flex space-x-2">
        <TemColorChange />
        <TemMainMenu />
      </div>
    </div>
  </header>
</template>
