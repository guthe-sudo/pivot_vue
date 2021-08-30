import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "pages.dashboard_FSO",
    component:  () => import("/src/components/pages/Dasboard_FSO.vue"),
  },
  {
    path: "/fso_cube",
    name: "pages.FSO_Cube",
    component:  () => import("/src/components/pages/FSO_Cube.vue"),
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