<template>
  <aside id="sidebar">
    <div class="logo">
      <logo />
    </div>
    <nav class="nav">
      <menu class="nav-menu">
        <li class="nav-menu__item">
          <router-link class="router-link" to="/">
            <icon-dashboard />
            Главная
          </router-link>
        </li>
        <li class="nav-menu__item">
          <router-link class="router-link" to="/bill">
            <icon-wallet />
            Мой счет
          </router-link>
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
  <div class="page">
    <page-header></page-header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

import pageHeader from '@/components/Header.vue'
import logo from '@/assets/logo.svg'
import iconDashboard from '@/assets/icons/icon-dashboard.svg'
import iconWallet from '@/assets/icons/icon-wallet.svg'
import iconServices from '@/assets/icons/icon-services.svg'
import iconStructure from '@/assets/icons/icon-structure.svg'
import iconDollar from '@/assets/icons/icon-dollar.svg'
import iconChart from '@/assets/icons/icon-chart.svg'
import iconProfile from '@/assets/icons/icon-profile.svg';

export default {
  name: 'app',
  components: {
    pageHeader,
    logo,
    iconDashboard,
    iconWallet,
    iconServices,
    iconStructure,
    iconDollar,
    iconChart,
    iconProfile
  },

  data() {
    return {}
  }
}
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
      color: $white;
    }
  }

  .router-link {
    @extend .flex-y-center;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 96px;
    position: relative;

    svg {
      margin: 0 32px 0 40px;
      fill: $white;
    }

    &-exact-active {
      color: $fresh-green;
      svg {
        fill: $fresh-green;
      }

      &:before {
        content: '';
        display: block;
        background: $fresh-green;
        width: 4px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}

.page {
  background: #808080;
  width: 100%;
}

main {
  padding: 64px 48px 48px;
}
</style>
