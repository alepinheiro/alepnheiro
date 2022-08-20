<script setup lang="ts">
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Jobs } from '~/types'

import 'swiper/css'
import 'swiper/css/pagination'

const { jobs } = await $fetch('/api/jobs')

const { t } = useLang()

const isOpen = ref(false)
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full h-96">
      <img src="/job.png" alt="" srcset="" class="object-cover w-full h-96 object-top">
    </div>
    <div class="-mt-10 mb-10">
      <div class="flex flex-col gap-4 mx-auto  max-w-sm  w-full ">
        <div class="rounded-lg p-4 global-text global-bg">
          <h1 class="font-bold text-2xl ">
            {{ t("menu.b") }}
          </h1>
        </div>
        <div class="rounded-lg p-4 global-text global-bg">
          <client-only>
            <Swiper
              :space-between="20"
              :slides-per-view="1"
              :centered-slides="true"
              :auto-height="false"
              :modules="[Pagination]"
              :pagination="{
                clickable: true,
              } as any"
            >
              <SwiperSlide
                v-for="(item) in jobs"
                :key="item.id"
                class="global-text global-bg"
              >
                <h1 class="font-bold text-2xl ">
                  {{ item.name }}
                </h1>
                <h2 class="text-xl ">
                  {{ item.function }}
                </h2>
                <div class="py-4 flex flex-col gap-2">
                  <h3 class="font-bold">
                    Principais atividades
                  </h3>
                  <ul class="list-inside list-disc">
                    <li v-for="(fn, index) in item.functions" :key="index">
                      {{ fn }}
                    </li>
                  </ul>
                  <div class="tags flex flex-col gap-2">
                    <h3 class="font-bold">
                      Tags
                    </h3>
                    <div class="flex flex-wrap gap-2">
                      <p v-for="(tag, index) in item.tags" :key="index">
                        {{ tag }}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </swiper>
          </client-only>
        </div>
        <TemBackButton />
      </div>
    </div>
    <!--  -->
  </div>
</template>

<style>
.tags p {
  @apply bg-green-700 text-xs p-1 rounded hover:bg-green-800 cursor-pointer;
}
  .swiper {
    width: 100%;
    height: 100%;
    @apply max-w-sm mx-auto z-0;
  }

  .swiper-slide {
    /* text-align: center;
    font-size: 18px; */

    /* Center slide text vertically */
    /* display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex; */
    /* -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center; */
    @apply flex flex-col pb-10 p-4 rounded-lg h-auto z-0;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
