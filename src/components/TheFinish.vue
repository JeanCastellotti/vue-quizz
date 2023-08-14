<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()

const percentage = Math.ceil((store.score / store.totalPoints) * 100)

let emoji: string

if (percentage === 100) emoji = '🏅'
if (percentage >= 80 && percentage < 100) emoji = '🎉'
if (percentage >= 50 && percentage < 80) emoji = '😐'
if (percentage >= 0 && percentage < 50) emoji = '☹️'
if (percentage === 0) emoji = '😭'
</script>

<template>
  <p class="mb-1 text-center text-xl">
    <span class="mr-3">{{ emoji }}</span>
    <span>
      You scored
      <strong>{{ store.score }}</strong>
      out of {{ store.totalPoints }} ({{ percentage }} %)
    </span>
  </p>
  <p class="mb-10 text-center">(Highscore: {{ store.highscore }} points)</p>
  <button
    @click="store.restart"
    class="mx-auto block cursor-pointer rounded bg-gray-700 px-5 py-2 transition hover:scale-105 hover:bg-emerald-600"
  >
    Restart
  </button>
</template>
