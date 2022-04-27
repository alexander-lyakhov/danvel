<template lang="pug">
//- Use form to prevent browser autocomplete
base-input.input
  //- field
  .input-field(
    :class="{'in-focus': isInFocus, 'has-error': hasError}"
  )
    //- field value
    input(
      :type="text",
      :id="id",
      :name="name",
      :value="modelValue",
      @input="onInput",
      @focus="setFocus"
      @blur="setBlur"
      placeholder="Поиск по любому параметру"
    )

    //- Magnify Icon
    a.icon(
      href="#"
      :class="{disabled: !modelValue}"
    )
      icon-magnify

  //- Error message
  span.error(
    v-if="hasError"
  ) *Ошибка ввода
</template>

<script>

import { ref, computed } from 'vue'
import baseInput from './base-input.vue'
import iconMagnify from '@/assets/icons/icon-magnify.svg'
export default {
  name: 'InputSearch',

  components: {
    baseInput,
    iconMagnify,
  },

  props: {
    title: {
      type: String,
      default: null
    },

    id: {
      type: String,
      default: null
    },

    name: {
      type: String,
      default: null
    },

    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    /**
     * Variables
     */
    const isInFocus = ref(false)
    const hasError = ref(false)
    const isPasswordVisible = ref(false)

    /**
     * Computed
     */

    const type = computed(() =>
      isPasswordVisible.value ? 'text':'password'
    )

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

    const toggleVisibile = (val) => {
      // change value only if input field is not empty
      if (props.modelValue) {
        isPasswordVisible.value = val
      }
    }

    return {
      // variables
      isInFocus,
      isPasswordVisible,
      hasError,

      //computed
      type,

      // methods
      onInput,
      setFocus,
      setBlur,
      toggleVisibile,
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  & > .input-field {
    border-bottom: 1px solid $black;
    outline: none;
    padding: 0;

    input {
      &::placeholder {
        font-size: 16px;
        font-weight: normal;
        opacity: .5;
      }
    }

    &.in-focus {
      border-bottom: 2px solid $black;
      outline: none;
    }

    &.has-error {
      outline: none;
    }
  }
}
</style>
