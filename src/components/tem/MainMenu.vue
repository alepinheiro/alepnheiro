<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { menus } = await $fetch('/api/menus')

const route = useRoute()
</script>

<template>
  <Menu as="div" class="relative inline-block text-left z-10">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md global-bg p-4 px-4 py-2 text-sm font-medium global-text  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Menu
        <UnoIcon
          class="i-ic-round-menu text-white-200 hover:text-white-100 -mr-1k ml-2 text-lg"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1 flex flex-col gap-2">
          <MenuItem v-for="item in menus" :key="item.id">
            <NuxtLink
              :to="item.url"
              class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-500 hover:text-white"
              :class="[
                item.url === route.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black',
              ]"
            >
              <UnoIcon
                class=" mr-2 text-lg text-blue-400" :class="item.icon"
              />
              {{ item.title }}
            </NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
