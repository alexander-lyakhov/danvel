<template>
  <sidebar />
  <div class="page">
    <page-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

import header from '@/components/Header.vue'
import sidebar from '@/components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    pageHeader: header,
    sidebar
  },
}
</script>


<style lang="scss" scoped>
.page {
  width: 100%;
}

main {
  padding: 64px 48px 48px;
}
</style>
