<template lang="pug">
aside.sidebar(ref="sidebar")
  .logo
    logo
  a.btn-close(href="#", @click.stop="close")
    icon-close
    span Закрыть
  nav.nav
    menu.nav-menu(@click.stop="clearActive")
      li(class="nav-menu__item")
        router-link.router-link(to="/")
          icon-dashboard
          span Главная
      li(class="nav-menu__item", :class="{ 'is-expanded': isMyAccountExpanded }", @click="toggleExpanded")
        router-link.router-link(to="/account")
          icon-wallet
          span Мой счет
        ul(class="nav-menu__item--submenu")
          li(class="nav-menu__item--submenu-item", @click.stop)
            router-link.router-link(to="my-account")
              span Мой счет
          li(class="nav-menu__item--submenu-item", @click.stop)
            router-link.router-link(to="operations")
              span Список финансовых операций
          li(class="nav-menu__item--submenu-item", @click.stop)
            router-link.router-link(to="new-account")
              span Открыть счет
      li(class="nav-menu__item")
        router-link.router-link(to="/offers")
          icon-services
          span Предложения
      li(class="nav-menu__item")
        router-link.router-link(to="/structure")
          icon-structure
          span Структура
      li(class="nav-menu__item")
        router-link.router-link(to="/finance")
          icon-dollar
          span Мои финансы
      li(class="nav-menu__item")
        router-link.router-link(to="/reports")
          icon-chart
          span Отчеты
      li(class="nav-menu__item")
        router-link.router-link(to="/profile")
          icon-profile
          span Профиль
</template>

<script>
import logo from "@/assets/logo.svg";
import iconClose from "@/assets/icons/icon-close.svg";
import iconDashboard from "@/assets/icons/icon-dashboard.svg";
import iconWallet from "@/assets/icons/icon-wallet.svg";
import iconServices from "@/assets/icons/icon-services.svg";
import iconStructure from "@/assets/icons/icon-structure.svg";
import iconDollar from "@/assets/icons/icon-dollar.svg";
import iconChart from "@/assets/icons/icon-chart.svg";
import iconProfile from "@/assets/icons/icon-profile.svg";

import { reactive, ref, toRefs, watch } from "vue";

export default {
  name: "Sidebar",

  components: {
    logo,
    iconClose,
    iconDashboard,
    iconWallet,
    iconServices,
    iconStructure,
    iconDollar,
    iconChart,
    iconProfile,
  },

  props: {
    offset: {
      type: String,
      default: '0px'
    },
  },

  setup(props, ctx) {
    const state = reactive({
      isMyAccountExpanded: false,
      offset: ''
    });

    return {
      ...toRefs(state),

      toggleExpanded() {
        state.isMyAccountExpanded = !state.isMyAccountExpanded;
      },

      getOffset() {
        return props.offset
      },

      close() {
        ctx.emit('triggerSidebar')
      },

    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: $black;
  min-height: 100%;
  flex: 0 0 330px;
  transition: margin .2s;
  margin-left: v-bind(getOffset());

  .logo {
    @extend .flex-center-center;
    background: $fresh-green;
    height: 96px;

    svg {
      width: 234px;
      height: 52px;
    }
  }

  .btn-close {
    font-weight: bold;
    font-size: 16px;
    color: $white;
    margin: 24px 0 0 24px;
    display: none;
    align-items: center;

    svg {
      fill: $white;
      width: 24px;
      height: 24px;
    }

    span {
      margin: 0 6px;
    }
  }

  nav {
    margin-top: 64px;
  }

  @include max-1440 {
    flex: 0 0 256px;

    .logo {
      height: 80px;
      svg {
        width: 192px;
        height: 44px;
      }
    }

    nav {
      margin-top: 48px;
    }
  }

  @include max-1280 {
    flex: 0 0 240px;

    .logo svg {
      width: 180px;
      height: 44px;
    }
  }

  @include max-768 {
    flex: 0 0 252px;
    margin-left: v-bind(getOffset());

    .logo {
      display: none;
    }

    .btn-close {
      display: flex;
    }

    nav {
      margin-top: 64px;
    }
  }

  @include max-320 {
    flex: 0 0 228px;
    margin-left: v-bind(getOffset());
  }

  .nav-menu {
    &__item {
      font-weight: bold;
      color: $white;

      &:not(.is-expanded) .nav-menu__item--submenu {
        display: none;
      }

      & > .router-link {
        @extend .flex-y-center;
        font-size: 20px;
        width: 100%;
        height: 96px;
        position: relative;
        cursor: pointer;

        svg {
          fill: $white;
          width: 40px;
          height: 40px;
          margin: 0 32px 0 40px;
        }

        &.is-expanded,
        &-active {
          color: $fresh-green;
          svg {
            fill: $fresh-green;
          }

          &:before {
            content: "";
            display: block;
            background: $fresh-green;
            width: 4px;
            height: 100%;
            position: absolute;
          }
        }

        @include max-1440 {
          font-size: 16px;
          height: 80px;
          svg {
            width: 24px;
            height: 24px;
            margin: 0 16px 0 32px;
          }
        }
      }

      &--submenu {
        &-item {
          font-size: 16px;
          line-height: 18px;
          margin-bottom: 12px;
          padding-left: 112px;
          position: relative;

          & > .router-link {
            display: block;
            width: 100%;

            &-active {
              color: $fresh-green;
            }
          }

          &:last-child {
            margin-bottom: 32px;
          }

          &:before {
            content: "";
            background: $white;
            width: 4px;
            height: 4px;
            display: block;
            position: absolute;
            left: 58px;
            top: 50%;
            transform: translate(0, -50%);
          }
        }
      }
    }
  }
}
</style>
