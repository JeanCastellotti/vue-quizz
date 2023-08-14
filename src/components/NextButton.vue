<script setup lang="ts">
import { computed } from 'vue'
import { store } from '@/store'

const countQuestions = computed(() => store.questions.length)

function next() {
  if (store.currentQuestionIndex + 1 < countQuestions.value) {
    store.currentQuestionIndex++
    store.answer = null
    return
  }

  store.status = 'finished'
  store.highscore =
    store.score > store.highscore ? store.score : store.highscore
}
</script>

<template>
  <button
    @click="next"
    class="rounded bg-emerald-600 px-5 py-3 transition hover:scale-105"
  >
    {{ store.currentQuestionIndex + 1 < countQuestions ? 'Next' : 'Finish' }}
  </button>
</template>
