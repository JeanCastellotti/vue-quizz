<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const timer = ref<ReturnType<typeof setInterval>>()

const mins = computed(() => Math.floor(store.secondsRemaining! / 60))
const seconds = computed(() => store.secondsRemaining! % 60)

onMounted(() => {
  timer.value = setInterval(() => {
    store.secondsRemaining!--
    store.status = store.secondsRemaining === 0 ? 'finished' : store.status
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})

const remainingTimer = computed(() => {
  return `${mins.value < 10 ? `0${mins.value}` : mins.value}:${
    seconds.value < 10 ? `0${seconds.value}` : seconds.value
  }`
})
</script>

<template>
  <div class="rounded border border-gray-600 px-5 py-3">
    {{ remainingTimer }}
  </div>
</template>
