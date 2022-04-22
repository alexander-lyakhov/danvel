<template lang="pug">
.page-content
  aside.sidebar
    h1 НАСТРОЙКИ
    nav
      menu.nav-menu
        li.nav-menu__item
          router-link.router-link(to="/main-settings")
            icon-edit
            span Основные данные
        li.nav-menu__item
          router-link.router-link(to="/contacts")
            icon-phone-list
            span Контакты
        li.nav-menu__item
          router-link.router-link(to="/security")
            icon-privacy
            span Безопасность
        li.nav-menu__item
          router-link.router-link(to="/location")
            icon-location
            span Местоположение
        li.nav-menu__item
          router-link.router-link(to="/verification")
            icon-face-id
            span Верификация
  main
    router-view
</template>

<script>
import iconEdit from "@/assets/icons/icon-edit.svg";
import iconPhoneList from "@/assets/icons/icon-phone-list.svg";
import iconPrivacy from "@/assets/icons/icon-privacy.svg";
import iconLocation from "@/assets/icons/icon-location.svg";
import iconFaceId from "@/assets/icons/icon-face-id.svg";

export default {
  name: "Profile",
  components: {
    iconEdit,
    iconPhoneList,
    iconPrivacy,
    iconLocation,
    iconFaceId,
  },
};
</script>

<style lang="scss" scoped>

.page-content {
  display: flex;
}

.sidebar {
  flex: 0 0 320px;
  border-right: 1px solid $black;

  .nav-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 52px;

    &__item {
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid $light-silver;
      width: 248px;

      &:not(.is-expanded) .nav-menu__item--submenu {
        display: none;
      }

      & > .router-link {
        @extend .flex-y-center;
        color: $pale;
        width: 100%;
        height: 96px;
        position: relative;
        cursor: pointer;

        svg {
          fill: $pale;
          position: absolute;
          left: -72px;
        }

        &-exact-active {
          color: $black;
          svg {
            fill: $black;
          }

          &:after {
            content: "";
            display: block;
            background: $black;
            width: 4px;
            height: 100%;
            position: absolute;
            right: -1px;
          }
        }
      }
    }
  }
}
main {
  width: 100%;
  padding: 0 0 0 128px;
}

</style>
