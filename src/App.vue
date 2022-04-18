<template>
  <aside id="sidebar">
    <div class="logo"></div>
    <nav>
    </nav>
  </aside>
  <main>
    <page-header></page-header>
    <router-view />
  </main>
</template>

<script>

import pageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    pageHeader
  }
}
</script>


<style lang="scss" scoped>
#sidebar {
  background: #000;
  width: 320px;

  .logo {
    background: #C2F14D;
    height: 96px;
  }
}

main {
  background: #808080;
  width: 100%;
}
</style>
