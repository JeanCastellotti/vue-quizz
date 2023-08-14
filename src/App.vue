<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import AppLoader from '@/components/AppLoader.vue'
import AppError from '@/components/AppError.vue'
import TheFooter from '@/components/TheFooter.vue'
import TimeRemaining from './components/TimeRemaining.vue'
import NextButton from './components/NextButton.vue'
import TheStarter from './components/TheStarter.vue'
import TheQuestion from './components/TheQuestion.vue'
import TheFinish from './components/TheFinish.vue'
import TheProgress from './components/TheProgress.vue'

import { store } from '@/store'

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/questions')
    const data = await res.json()
    store.questions = data
    store.status = 'ready'
  } catch (error) {
    store.status = 'error'
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-800 p-20 text-gray-200">
    <div class="mx-auto max-w-xl">
      <TheHeader />
      <main>
        <AppLoader v-if="store.status === 'loading'" />
        <AppError v-else-if="store.status === 'error'" />
        <TheStarter v-else-if="store.status === 'ready'" />
        <template v-else-if="store.status === 'active'">
          <TheProgress />
          <TheQuestion />
          <TheFooter>
            <TimeRemaining />
            <NextButton v-if="store.answer !== null" />
          </TheFooter>
        </template>
        <TheFinish v-else-if="store.status === 'finished'" />
      </main>
    </div>
  </div>
</template>
