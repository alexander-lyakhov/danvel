﻿<template lang="pug">
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
      type="text",
      :id="id",
      :name="name",
      :value="modelValue",
      @input="onInput",
      @focus="setFocus"
      @blur="setBlur"
    )

  //- Error message
  span.error(
    v-if="hasError"
  ) *Введите корректный почтовый адрес
</template>

<script>

import { ref } from 'vue'

/*
 * Import compositions
 */
import useInput from './useInput.js'

/*
 * Import components
 */
import lbl from './label.vue'
import baseInput from './base-input.vue'

export default {
  name: 'InputEmail',

  components: {
    lbl,
    baseInput,
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
    return {
      ...useInput(props, ctx)
    }
  }
}
</script>
