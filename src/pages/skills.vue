<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { t } = useLang()

const { skills } = await $fetch('/api/skills')
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full h-96">
      <img src="/working-books.jpg" alt="" srcset="" class="object-cover w-full h-96">
    </div>
    <div class="flex flex-col mx-auto -mt-10 max-w-sm w-full rounded-lg global-text gap-4 mb-10">
      <div class="global-bg w-full rounded-lg p-4">
        <h1 class="font-bold text-2xl ">
          {{ t("menu.c") }}
        </h1>
      </div>
      <div class="py-4 text-center grid grid-cols-2 gap-4 global-bg w-full rounded-lg p-4">
        <div v-for="skill in skills" :key="skill.id" class="flex flex-col py-2 rounded border-zinc-600 border">
          <div class=" h-20 w-20 p-2  mx-auto">
            <Icon :icon="skill.icon" height="100%" />
          </div>
          <h2 class="m-auto">
            {{ skill.title }}
          </h2>
        </div>
      </div>
      <TemBackButton />
    </div>
  </div>
</template>
