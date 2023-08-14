<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <div class="text-center">
    <div class="mb-10 space-y-2">
      <h2 class="text-3xl font-bold">Welcome to The Vue Quiz!</h2>
      <h3 class="text-lg">
        {{ store.countQuestions }} questions to test your Vue mastery
      </h3>
    </div>
    <button
      @click="store.start"
      class="inline-block cursor-pointer rounded bg-gray-700 px-5 py-2 transition hover:scale-105 hover:bg-emerald-600"
    >
      Let's start
    </button>
  </div>
</template>
