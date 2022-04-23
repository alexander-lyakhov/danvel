<template lang="pug">
aside#sidebar(:class="{'is-visible': isVisible}")
  .logo
    logo
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
          span Профиль</template>

<script>
import logo from "@/assets/logo.svg";
import iconDashboard from "@/assets/icons/icon-dashboard.svg";
import iconWallet from "@/assets/icons/icon-wallet.svg";
import iconServices from "@/assets/icons/icon-services.svg";
import iconStructure from "@/assets/icons/icon-structure.svg";
import iconDollar from "@/assets/icons/icon-dollar.svg";
import iconChart from "@/assets/icons/icon-chart.svg";
import iconProfile from "@/assets/icons/icon-profile.svg";

import { reactive, toRefs } from "vue";

export default {
  name: "Sidebar",

  components: {
    logo,
    iconDashboard,
    iconWallet,
    iconServices,
    iconStructure,
    iconDollar,
    iconChart,
    iconProfile,
  },

  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const state = reactive({
      isMyAccountExpanded: false,
    });

    console.log('props', props)

    return {
      ...toRefs(state),

      onMenuClick() {
        state.isMyAccountExpanded = false;
      },

      toggleExpanded() {
        state.isMyAccountExpanded = !state.isMyAccountExpanded;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  background: $black;
  flex: 0 0 320px;

  transition: margin .2s;

  &:not(.is-visible) {
    margin-left: -320px;
  }

  .logo {
    @extend .flex-center-center;
    background: $fresh-green;
    height: 96px;
  }

  .nav-menu {
    margin-top: 64px;

    &__item {
      $this: &;

      font-size: 20px;
      font-weight: bold;
      color: $white;

      &:not(.is-expanded) .nav-menu__item--submenu {
        display: none;
      }

      & > .router-link {
        @extend .flex-y-center;
        width: 100%;
        height: 96px;
        position: relative;
        cursor: pointer;

        svg {
          margin: 0 32px 0 40px;
          fill: $white;
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
