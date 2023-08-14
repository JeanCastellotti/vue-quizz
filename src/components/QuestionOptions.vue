<script setup lang="ts">
import { store } from '@/store'
import { computed } from 'vue'

const props = defineProps(['question'])

const hasAnswered = computed(() => store.answer !== null)

function selectAnswer(answer: number) {
  store.answer = answer
  store.score =
    answer === props.question.correctOption
      ? store.score + props.question.points
      : store.score
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <button
      v-for="(option, index) in question.options"
      @click="selectAnswer(index)"
      :key="index"
      :disabled="hasAnswered"
      class="cursor-pointer rounded bg-gray-700 px-5 py-2 text-left ring ring-transparent transition hover:ring-gray-400 ring-offset-4 ring-offset-gray-800 disabled:cursor-default disabled:hover:ring-transparent"
      :class="{
        'text-red-500 !ring-red-500':
          index === store.answer && index !== question.correctOption,
        'text-green-500 !ring-green-500':
          hasAnswered && index === question.correctOption,
      }"
    >
      {{ option }}
    </button>
  </div>
</template>
