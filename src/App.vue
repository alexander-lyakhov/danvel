<template lang="pug">
sidebar(ref="sidebar", :offset="sidebarOffset", @triggerSidebar="toggleSidebar")
.page
  page-header(@triggerSidebar="toggleSidebar")
  main
    router-view
</template>

<script>
import header from "@/components/Header.vue";
import sidebar from "@/components/Sidebar.vue";
import {reactive, ref, toRefs} from 'vue'

export default {
  name: "app",

  components: {
    pageHeader: header,
    sidebar,
  },

  setup() {
    const state = reactive({
      sidebarOffset: '0px'
    })

    const sidebar = ref(null)

    return {
      ...toRefs(state),
      sidebar,

      toggleSidebar() {
        const sidebarEl = sidebar.value.$el
        state.sidebarOffset = !sidebarEl.offsetLeft ? -sidebarEl.offsetWidth + 'px' : 0 + 'px'
      }
    }
  }
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
