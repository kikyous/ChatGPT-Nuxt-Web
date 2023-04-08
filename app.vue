<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <NaiveProvider>
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </NaiveProvider>
  </NConfigProvider>
</template>



<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@src/components/common'
import { useTheme } from '@src/hooks/useTheme'
import { useLanguage } from '@src/hooks/useLanguage'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
</script>

