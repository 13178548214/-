import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  const guess = ref<XtxGuessInstance>()
  const onScrolltolower = () => {
    guess.value?.getmore()
  }
  return {
    onScrolltolower,
    guess,
  }
}
