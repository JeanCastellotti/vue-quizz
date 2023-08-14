<script setup lang="ts">
import { computed } from 'vue'
import QuestionOptions from './QuestionOptions.vue'
import { store } from '@/store'

const question = computed(() => store.questions[store.currentQuestionIndex])
</script>

<template>
  <h4 class="mb-10 text-center text-lg font-sembibold">
    {{ question.question }}
  </h4>
  <QuestionOptions :question="question" />
</template>
