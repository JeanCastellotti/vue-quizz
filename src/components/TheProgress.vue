<script setup lang="ts">
import { computed } from 'vue'
import { store } from '@/store'

const countQuestions = computed(() => store.questions.length)
const totalPoints = computed(() =>
  store.questions.reduce((acc, q) => acc + q.points, 0)
)

const progressBarPercentage = computed(() => {
  return (
    ((store.currentQuestionIndex + Number(store.answer !== null)) /
      countQuestions.value) *
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
        Question {{ store.currentQuestionIndex + 1 }}/{{ countQuestions }}
      </span>
      <span>{{ store.score }}/ {{ totalPoints }} points</span>
    </div>
  </header>
</template>
