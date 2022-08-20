import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  srcDir: './src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@intlify/nuxt3',
    '@nuxtjs/color-mode',
  ],

  build: {
    transpile: ['@headlessui/vue'],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-brazil'],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      availableLocales: ['en-US', 'pt-BR'],
      sync: true,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@intlify/nuxt3', './type.d.ts'],
      },
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  vite: {
    logLevel: 'info',
  },
})
