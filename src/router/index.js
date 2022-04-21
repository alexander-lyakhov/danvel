import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Account.vue"),
    children: [
      {
        path: "/my-account",
        name: "my-account",
        component: () => import("../views/MyAccount.vue"),
      },
      {
        path: "/operations",
        name: "operations",
        component: () => import("../views/Operations.vue"),
      },
      {
        path: "/new-account",
        name: "new-account",
        component: () => import("../views/NewAccount.vue"),
      },
    ],
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
