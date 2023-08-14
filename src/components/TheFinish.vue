<script setup lang="ts">
import { store } from '@/store'
import { computed, ref } from 'vue'

const totalPoints = computed(() =>
  store.questions.reduce((acc, q) => acc + q.points, 0)
)

const percentage = Math.ceil((store.score / totalPoints.value) * 100)

const emoji = ref<string | null>(null)

if (percentage === 100) emoji.value = '🏅'
if (percentage >= 80 && percentage < 100) emoji.value = '🎉'
if (percentage >= 50 && percentage < 80) emoji.value = '😐'
if (percentage >= 0 && percentage < 50) emoji.value = '☹️'
if (percentage === 0) emoji.value = '😭'

function restart() {
  store.status = 'ready'
  store.currentQuestionIndex = 0
  store.answer = null
  store.score = 0
  store.secondsRemaining = null
}
</script>

<template>
  <p class="mb-1 text-center text-xl">
    <span class="mr-3">{{ emoji }}</span>
    <span>
      You scored
      <strong>{{ store.score }}</strong>
      out of {{ totalPoints }} ({{ percentage }} %)
    </span>
  </p>
  <p class="mb-10 text-center">(Highscore: {{ store.highscore }} points)</p>
  <button
    @click="restart"
    class="mx-auto block cursor-pointer rounded bg-gray-700 px-5 py-2 transition hover:scale-105 hover:bg-emerald-600"
  >
    Restart
  </button>
</template>
