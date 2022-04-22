<template lang="pug">
.page-content
	aside.sidebar
		h1 НАСТРОЙКИ
		nav
			menu.nav-menu
				li.nav-menu__item
					router-link.router-link(to="/profile")
						icon-dashboard
						span Основные настройки
				li.nav-menu__item
					router-link.router-link(to="/profile")
						icon-dashboard
						span Контакты
				li.nav-menu__item
					router-link.router-link(to="/profile")
						icon-dashboard
						span Безопасность
				li.nav-menu__item
					router-link.router-link(to="/profile")
						icon-dashboard
						span Местоположение
				li.nav-menu__item
					router-link.router-link(to="/profile")
						icon-dashboard
						span Верификация

	main
</template>

<script>
import iconDashboard from "@/assets/icons/icon-dashboard.svg";

export default {
	name: "Profile",
	components: {
		iconDashboard
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
		margin-top: 52px;

		&__item {
			font-size: 20px;
			font-weight: bold;

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
					margin: 0 32px 0 0;
					fill: $pale;
				}

				&.is-expanded,
				&-active {
					color: $black;
					svg {
						fill: $black;
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
		}
	}
}
main {
	background: #e0e0e0;
	width: 100%;
}

</style>
