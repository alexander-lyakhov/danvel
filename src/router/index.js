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
    component: () => import("../views/Account/index.vue"),
    redirect: '/my-account',
    children: [
      {
        path: "/my-account",
        name: "my-account",
        component: () => import("../views/Account/MyAccount.vue"),
      },
      {
        path: "/operations",
        name: "operations",
        component: () => import("../views/Account/Operations.vue"),
      },
      {
        path: "/new-account",
        name: "new-account",
        component: () => import("../views/Account/NewAccount.vue"),
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
    redirect: "/main-settings",
    component: () => import("../views/Profile"),
    children: [
      {
        path: "/main-settings",
        name: "main-settings",
        component: () => import("../views/Profile/MainSettings.vue"),
      },
      {
        path: "/contacts",
        name: "contacts",
        component: () => import("../views/Profile/Contacts.vue"),
      },
      {
        path: "/security",
        name: "security",
        component: () => import("../views/Profile/Security.vue"),
      },
      {
        path: "/location",
        name: "location",
        component: () => import("../views/Profile/Location.vue"),
      },
      {
        path: "/verification",
        name: "verification",
        component: () => import("../views/Profile/Verification.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
