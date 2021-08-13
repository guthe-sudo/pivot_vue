import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "pages.home",
    component:  () => import("/src/components/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "pages.about",
    component:  () => import("/src/components/pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;