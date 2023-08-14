<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <div class="flex flex-col gap-5">
    <button
      v-for="(option, index) in store.currentQuestion.options"
      @click="store.selectAnswer(index)"
      :key="index"
      :disabled="store.hasAnswered"
      class="cursor-pointer rounded bg-gray-700 px-5 py-2 text-left ring ring-transparent transition hover:ring-gray-400 ring-offset-4 ring-offset-gray-800 disabled:cursor-default disabled:hover:ring-transparent"
      :class="{
        'text-red-500 !ring-red-500':
          index === store.answer &&
          index !== store.currentQuestion.correctOption,
        'text-green-500 !ring-green-500':
          store.hasAnswered && index === store.currentQuestion.correctOption,
      }"
    >
      {{ option }}
    </button>
  </div>
</template>
