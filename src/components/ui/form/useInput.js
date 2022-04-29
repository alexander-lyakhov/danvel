import { ref } from 'vue'

export default function(props, ctx) {
  /**
   * Variables
   */
  const isInFocus = ref(false)
  const hasError = ref(false)

  /**
   * Methods
   */
  const onInput = (e) => {
    ctx.emit('update:modelValue', e.target.value)
  }

  const setFocus = () => {
    isInFocus.value = true
  }

  const setBlur = () => {
    isInFocus.value = false
  }

  return {
    // variables
    isInFocus,
    hasError,

    // methods
    onInput,
    setFocus,
    setBlur
  }
}