import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
/*
import Home from "../views/Bills.vue";
import Home from "../views/Offers.vue";
import Home from "../views/Structure.vue";
import Home from "../views/Finance.vue";
import Home from "../views/Reports.vue";
import Home from "../views/Profile.vue";
*/
const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/bill",
		name: "bill",
		component: () => import("../views/Bill.vue"),
	},
	{
		path: "/offers",
		name: "offers",
		component: () => import("../views/Offers.vue"),
	},
	{
		path: "/structure",
		name: "structure",
		component: () => import("../views/Structure.vue"),
	},
	{
		path: "/finance",
		name: "finance",
		component: () => import("../views/Finance.vue"),
	},
	{
		path: "/reports",
		name: "reposr",
		component: () => import("../views/Reports.vue"),
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("../views/Profile.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
