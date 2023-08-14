<script setup lang="ts">
import QuestionOptions from './QuestionOptions.vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <h4 class="mb-10 text-center text-lg font-sembibold">
    {{ store.currentQuestion.question }}
  </h4>
  <QuestionOptions />
</template>
