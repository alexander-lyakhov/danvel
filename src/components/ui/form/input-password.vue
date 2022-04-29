<template lang="pug">
//- Use form to prevent browser autocomplete
base-input
  //- title
  lbl.label(
    v-if="title"
    :for="id",
    :value="title"
  )

  //- field
  .input-field(
    :class="{'in-focus': isInFocus, 'has-error': hasError}"
  )
    //- field value
    input(
      :type="type",
      :id="id",
      :name="name",
      :value="modelValue",
      @input="onInput",
      @focus="setFocus"
      @blur="setBlur"
      autocomplete="off"
    )

    //- Eye Icon
    a.icon(
      href="#"
      :class="{disabled: !modelValue}"
      @mousedown="toggleVisibile(true)"
      @mouseup="toggleVisibile(false)"
    )
      icon-eye(v-if="isPasswordVisible")
      icon-eye-hide(v-else)

  //- Error message
  span.error(
    v-if="hasError"
  ) *Пароль должен содержать более 8 символов
</template>

<script>

import { ref, computed } from 'vue'

/*
 * Import compositions
 */
import useInput from './useInput.js'

/*
 * Import components
 */
import lbl from './label.vue'
import baseInput from './base-input.vue'
import iconEye from '@/assets/icons/icon-eye.svg'
import iconEyeHide from '@/assets/icons/icon-eye-hide.svg'

export default {
  name: 'InputPassword',

  components: {
    lbl,
    baseInput,
    iconEye,
    iconEyeHide
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
    const toggleVisibile = (val) => {
      // change value only if input field is not empty
      if (props.modelValue) {
        isPasswordVisible.value = val
      }
    }

    return {
      // compositions
      ...useInput(props, ctx),

      // variables
      isPasswordVisible,

      //computed
      type,

      // methods
      toggleVisibile,
    }
  }
}
</script>
