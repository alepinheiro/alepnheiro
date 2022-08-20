<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'
InitApp()
const locale = useState<string>('locale.i18n')
</script>

<template>
  <Html :lang="locale">
    <Body
      class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-zinc-800 dark:text-gray-200"
    >
      <NuxtLayout>
        <NavMainNav />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
body {
  @apply bg-blue-100 dark:bg-gray-800;
}
.global-text {
  @apply text-white dark:text-gray-50;
}
.global-bg{
  @apply bg-blue-600 dark:bg-zinc-700;
}
.global-hover{
  @apply hover:bg-opacity-80;
}
</style>
