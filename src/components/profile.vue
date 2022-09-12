<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4 w-full items-center justify-between py-2">
      <img
        class="h-32 w-32 rounded-full ring-2 ring-offset-2 ring-blue-600 ring-offset-zinc-700"
        height="160"
        width="160"
        src="/profile-photo.jpg"
        alt="Este sou eu!"
      >
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-2xl ">
          {{ t("name") }}
        </h1>
        <h2>{{ t("occupation") }}</h2>
      </div>

      <div
        class="place-items-center grid grid-cols-4 justify-items-center gap-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-md [&>*]:bg-blue-600 [&>*]:p-3 dark:[&>*]:bg-zinc-600 "
      >
        <a
          target="blank"
          class="font-bold hover:bg-gray-300 dark:hover:bg-gray-400 global-text"
          href="https://github.com/alepinheiro"
        >
          <UnoIcon class="i-ph-github-logo-duotone" />
        </a>

        <a
          class="font-bold hover:bg-gray-300 dark:hover:bg-gray-400 global-text"
          href="https://instagram.com/alepslx"
          target="_blank"
        >
          <UnoIcon class="i-ph-instagram-logo-duotone" />
        </a>

        <a
          target="blank"
          class="font-bold hover:bg-gray-300 dark:hover:bg-gray-400 global-text"
          href="https://www.behance.net/alessandropinheiro"
        >
          <UnoIcon class="i-ph-behance-logo-duotone" />
        </a>

        <a
          target="blank"
          class="font-bold hover:bg-gray-300 dark:hover:bg-gray-400 global-text"
          href="https://www.linkedin.com/in/alessandropinheiro"
        >
          <UnoIcon class="i-ph-linkedin-logo-duotone" />
        </a>
      </div>
    </div>
  </div>
</template>
