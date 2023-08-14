<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const progressBarPercentage = computed(() => {
  return (
    ((store.currentQuestionIndex + Number(store.answer !== null)) /
      store.countQuestions) *
    100
  )
})
</script>

<template>
  <header class="mb-10 flex flex-col">
    <div class="mb-3 h-3 rounded bg-gray-700">
      <div
        :style="{ width: `${progressBarPercentage}%` }"
        class="h-3 rounded bg-gray-400 transition-[width]"
      ></div>
    </div>
    <div class="flex justify-between">
      <span>
        Question {{ store.currentQuestionIndex + 1 }}/{{ store.countQuestions }}
      </span>
      <span>{{ store.score }}/ {{ store.totalPoints }} points</span>
    </div>
  </header>
</template>
