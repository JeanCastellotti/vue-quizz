import { reactive } from 'vue'

interface Question {
  question: string
  options: string[]
  correctOption: number
  points: number
}

interface Store {
  status: string
  questions: Question[]
  currentQuestionIndex: number
  answer: number | null
  score: number
  highscore: number
  secondsRemaining: number | null
}

export const store = reactive<Store>({
  status: 'loading',
  questions: [],
  currentQuestionIndex: 0,
  answer: null,
  score: 0,
  highscore: 0,
  secondsRemaining: null,
})
