<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <button
    @click="store.next"
    class="rounded bg-emerald-600 px-5 py-3 transition hover:scale-105"
  >
    {{
      store.currentQuestionIndex + 1 < store.countQuestions ? 'Next' : 'Finish'
    }}
  </button>
</template>
