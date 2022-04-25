<template lang="pug">
header
  a.btn.btn-sidebar-trigger(href="#" @click.prevent="triggerSidebar")
    icon-menu
</template>

<script>
import iconMenu from '@/assets/icons/icon-menu.svg'

export default {
  name: "Header",

  components: {
    iconMenu
  },

  setup(props, ctx) {
    return {
      triggerSidebar() {
        ctx.emit('triggerSidebar')
      }
    }
  }
};
</script>

<style lang="scss" scoped>

header {
  background: #e8e8e8;
  border-bottom: 1px solid #808080;
  display: flex;
  align-items: center;
  height: 96px;
  padding: 0 48px;

  @include max-1440 {
    height: 80px;
    padding: 0 32px;
  }

  @include max-768 {
    height: 64px;
    padding: 0 24px;
  }

  @include max-320 {
    height: 48px;
    padding: 0 16px;
  }

  .btn-sidebar-trigger {
    svg {
      fill: $black;
      width: 32px;
      height: 32px;

      @include max-1440 {
        width: 24px;
        height: 24px
      }

      @include max-768 {
        width: 20px;
        height: 20px
      }
    }
  }
}
</style>
