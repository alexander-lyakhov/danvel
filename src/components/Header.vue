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
  //background: #008080;
  border-bottom: 1px solid #808080;
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  padding: 0 48px;

  .btn {
    &-sidebar-trigger {
      svg {
        fill: $black;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
