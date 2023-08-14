import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface Question {
  question: string
  options: string[]
  correctOption: number
  points: number
}

const SECONDS_PER_QUESTION = 30

export const useStore = defineStore('app', () => {
  const status = ref('loading')
  const questions = ref<Question[]>([])
  const currentQuestionIndex = ref(0)
  const answer = ref<number | null>(null)
  const score = ref(0)
  const highscore = ref(0)
  const secondsRemaining = ref<number | null>(null)

  const countQuestions = computed(() => questions.value.length)

  const hasAnswered = computed(() => answer.value !== null)

  const totalPoints = computed(() =>
    questions.value.reduce((acc, q) => acc + q.points, 0)
  )

  const currentQuestion = computed(
    () => questions.value[currentQuestionIndex.value]
  )

  function start() {
    status.value = 'active'
    secondsRemaining.value = questions.value.length * SECONDS_PER_QUESTION
  }

  function next() {
    if (currentQuestionIndex.value + 1 < countQuestions.value) {
      currentQuestionIndex.value++
      answer.value = null
      return
    }

    status.value = 'finished'
    highscore.value =
      score.value > highscore.value ? score.value : highscore.value
  }

  function selectAnswer(payload: number) {
    answer.value = payload
    score.value =
      payload === currentQuestion.value.correctOption
        ? score.value + currentQuestion.value.points
        : score.value
  }

  function restart() {
    status.value = 'ready'
    currentQuestionIndex.value = 0
    answer.value = null
    score.value = 0
    secondsRemaining.value = null
  }

  return {
    status,
    questions,
    currentQuestionIndex,
    answer,
    score,
    highscore,
    secondsRemaining,
    countQuestions,
    totalPoints,
    hasAnswered,
    currentQuestion,
    start,
    next,
    selectAnswer,
    restart,
  }
})
