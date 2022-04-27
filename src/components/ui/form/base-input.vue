<template lang="pug">
form.input(autocomplete="off")
  slot
</template>

<script>

export default {
  name: '',
}
</script>

<style lang="scss" scoped>
.input {
  // Title
  & ::v-deep(.label) {
    font-size: 16px;
  }

  // Field
  & ::v-deep(.input-field) {
    background: $white;
    outline: 1px solid $black;
    display: flex;
    align-items: center;
    width: 342px;
    height: 54px;
    margin-top: 4px;
    padding: 0 16px;

    &.in-focus {
      outline: 2px solid $black;
    }

    &.has-error {
      outline: 1px solid $red;

      input {
        color: $red;
      }
    }

    input {
      font-size: 20px;
      font-weight: bold;
      line-height: 26px;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
    }

    .icon {
      margin-left: 10px;

      svg {
        fill: $black;
      }

      &.disabled {
        opacity: .3;
      }
    }
  }

  // Error message
  & ::v-deep(.error) {
    font-size: 12px;
    color: $red;
    line-height: 14px;
    display: inline-block;
    margin-top: 4px;
  }
}
</style>
