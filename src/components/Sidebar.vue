<template>
  <aside id="sidebar">
    <div class="logo">
      <logo />
    </div>
    <nav class="nav">
      <menu class="nav-menu" @click.stop="clearActive">
        <li class="nav-menu__item">
          <router-link class="router-link" to="/">
            <icon-dashboard />
            Главная
          </router-link>
        </li>
        <li
          class="nav-menu__item"
          :class="{ 'is-expanded': isMyAccountExpanded }"
          @click="toggleExpanded"
        >
          <router-link class="router-link" to="/account">
            <icon-wallet />
            Мой счет
          </router-link>
          <ul class="nav-menu__item--submenu">
            <li class="nav-menu__item--submenu-item" @click.stop>
              <router-link class="router-link" to="my-account">
                Мой счет
              </router-link>
            </li>
            <li class="nav-menu__item--submenu-item" @click.stop>
              <router-link class="router-link" to="operations">
                Список финансовых операций
              </router-link>
            </li>
            <li class="nav-menu__item--submenu-item" @click.stop>
              <router-link class="router-link" to="new-account">
                Открыть счет
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-menu__item">
          <router-link class="router-link" to="/offers">
            <icon-services />
            Предложения
          </router-link>
        </li>
        <li class="nav-menu__item">
          <router-link class="router-link" to="/structure">
            <icon-structure />
            Структура
          </router-link>
        </li>
        <li class="nav-menu__item">
          <router-link class="router-link" to="/finance">
            <icon-dollar />
            Мои финансы
          </router-link>
        </li>
        <li class="nav-menu__item">
          <router-link class="router-link" to="/reports">
            <icon-chart />
            Отчеты
          </router-link>
        </li>
        <li class="nav-menu__item">
          <router-link class="router-link" to="/profile">
            <icon-profile />
            Профиль
          </router-link>
        </li>
      </menu>
    </nav>
  </aside>
</template>

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

  setup() {
    const state = reactive({
      isMyAccountExpanded: false,
    });

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
