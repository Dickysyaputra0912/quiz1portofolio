import { createWebHistory, createRouter } from "vue-router";
import Home from "@/view/home.vue";
import Portofolio from "@/view/portofolio.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/portofolio",
        name: "Portofolio",
        component: Portofolio,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;