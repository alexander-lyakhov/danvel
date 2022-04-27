<template lang="pug">
label {{ value }}
</template>

<script>
export default {
  name: 'Label',

  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

