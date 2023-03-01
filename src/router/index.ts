import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/character",
    name: "character",
    component: () => import("../views/Character.vue"),
  },
  {
    path: "/artifact",
    name: "artifact",
    component: () => import("../views/Artifacts.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
