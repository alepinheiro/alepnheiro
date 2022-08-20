<script setup lang="ts">
const { menus } = await $fetch('/api/menus')
</script>

<template>
  <div class="mx-auto mt-24 max-w-sm">
    <Profile />

    <ul role="list" class="mt-10 space-y-4">
      <li v-for="item in menus" :key="item.id">
        <List
          :link="{
            id: item.id,
            title: item.title,
            url: item.url,
            icon: item.icon,
          }"
        />
      </li>
    </ul>
  </div>
</template>
