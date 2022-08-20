<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full h-96">
      <img src="/whoami.jpeg" alt="" srcset="" class="object-cover w-full h-96">
    </div>
    <div class="mx-auto -mt-10 flex flex-col gap-4 mb-10">
      <div class="max-w-sm global-bg w-full rounded-lg p-4  global-text">
        <h1 class="font-bold text-2xl ">
          {{ t("name") }}
        </h1>
        <h2>{{ t("location") }}</h2>
      </div>
      <div class="max-w-sm global-bg w-full rounded-lg p-4  global-text">
        <div class="py-4 text-justify flex flex-col gap-4">
          <p>{{ t("whoami.description.l1") }}</p>
          <p>{{ t("whoami.description.l2") }}</p>
          <p>{{ t("whoami.description.l3") }}</p>
        </div>
      </div>
      <div class="max-w-sm">
        <TemBackButton />
      </div>
    </div>
  </div>
</template>
