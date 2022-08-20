<!-- eslint-disable prefer-template -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { t } = useLang()
const { subjects } = await $fetch('/api/subjects')
const selectedSubject = ref(0)
const name = ref('')
function sendToWhats() {
  if (name.value && selectedSubject.value > 0) {
    const subjectText = subjects.map((subject) => {
      if (subject.id === selectedSubject.value)
        return subject.text
    })
    const text = 'Olá, me chamo ' + name.value + ' e' + subjectText
    window.open(encodeURI('https://wa.me/5547999493409?text=' + text))
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full h-96">
      <img src="/whoami.jpeg" alt="" srcset="" class="object-cover w-full h-96">
    </div>
    <div class="mx-auto -mt-10 flex flex-col gap-4 mb-10">
      <div class="max-w-sm global-bg w-full rounded-lg p-4 global-text">
        <h1 class="font-bold text-2xl text-center">
          {{ t("contact.callToAction") }}
        </h1>
      </div>
      <div class="max-w-sm global-bg w-full rounded-lg p-4  global-text">
        <div class="py-4 text-justify flex flex-col gap-4">
          <form class="flex flex-col gap-4" @submit.prevent="sendToWhats">
            <div class="flex flex-col gap-2">
              <label for="nome">Digite seu nome</label>
              <input v-model="name" type="text" name="nome" placeholde="Nome" class="rounded bg-white dark:bg-transparent border text-black dark:text-white">
            </div>
            <div class="flex flex-col gap-2">
              <label for="subject">Motivo do contato</label>
              <select id="subject" v-model="selectedSubject" name="subject" class="rounded bg-white dark:bg-transparent border text-black dark:text-white">
                <option value="0" disabled selected class="global-bg">
                  Selecione uma opção
                </option>
                <option v-for="subject in subjects" :key="subject.id" :value="subject.id" class="global-bg">
                  {{ subject.subject }}
                </option>
              </select>
            </div>
            <button
              :class="{ 'bg-green-600 hover:bg-green-700': name && (selectedSubject > 0), 'cursor-not-allowed border-zinc-500 border': !name || (selectedSubject === 0) }"
              class="flex flex-row  p-2 rounded  items-center justify-center"
            >
              <div class="h-10 p-2">
                <Icon
                  icon="akar-icons:whatsapp-fill" height="100%/"
                />
              </div>
              <div>Enviar no WhatsApp</div>
            </button>
          </form>
        </div>
      </div>
      <div class="max-w-sm">
        <TemBackButton />
      </div>
    </div>
  </div>
</template>
