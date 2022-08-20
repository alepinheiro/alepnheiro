<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <NuxtLink
    to="/"
    class="flex items-center space-x-3 rounded-lg p-4 global-bg global-hover text-white py-4 hover:shadow-xl border dark:border-zinc-600"
  >
    <UnoIcon
      class="i-ic-round-arrow-back-ios h-6 w-6 text-lg"
    />

    <div class="item-center flex ">
      <UnoIcon class="mr-3 text-lg dark:text-gray-400" />
      {{ t("back") }}
    </div>
  </NuxtLink>
</template>
