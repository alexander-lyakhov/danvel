<template lang="pug">
header
  a.btn.btn-sidebar-trigger(href="#" @click.prevent="triggerSidebar")
    icon-menu
  a.btn.btn-partner-link
    icon-copy.icon-copy
    span Партнерская ссылка
    icon-menu-down.icon-menu-down
</template>

<script>
import iconMenu from '@/assets/icons/icon-menu.svg'
import iconCopy from '@/assets/icons/icon-copy.svg'
import iconMenuDown from '@/assets/icons/icon-menu-down.svg'

export default {
  name: "Header",

  components: {
    iconMenu,
    iconCopy,
    iconMenuDown,
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
  @extend .flex-y-center;
  background: #e8e8e8;
  border-bottom: 1px solid #808080;
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

  .btn {
    &-sidebar-trigger {
      svg {
        fill: $black;
        width: 32px;
        height: 32px;
        position: relative;
        top: 4px;

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

    &-partner-link {
      font-size: 16px;
      margin-left: 56px;
      cursor: pointer;

      @include max-1440 {
        margin-left: 40px;
      }

      @include max-768 {
        margin-left: 28px;
      }

      @include max-320 {
        display: none;
      }

      .icon-copy {
        fill: $black;
        width: 18px;
        height: 18px;
        position: relative;
        top: 4px;
      }

      span {
        margin-left: 4px;
      }

      .icon-menu-down {
        fill: $black;
        position: relative;
        top: -1px;
        left: 8px;
      }
    }
  }

}
</style>
