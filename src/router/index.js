import HomePage from "@/pages/HomePage.vue";
import OrdersPage from "@/pages/OrdersPage.vue";
import FavoriteSneakers from "@/pages/FavoriteSneakers.vue";
import SneakerPage from "@/pages/SneakerPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/:id",
    component: SneakerPage,
  },
  {
    path: "/favorites",
    component: FavoriteSneakers,
  },
  {
    path: "/orders",
    component: OrdersPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: "/sneakers",
  routes,
});

export default router;
