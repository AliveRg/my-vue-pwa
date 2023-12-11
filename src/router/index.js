import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: function () {
            return import("../views/HomeView.vue");
        },
    },
    {
        path: "/bascket",
        name: "bascket",
        component: function () {
            return import("../views/BascketView.vue");
        },
    },
    {
        path: "/about",
        name: "about",
        component: function () {
            return import("../views/AboutView.vue");
        },
    },
    {
        path: "/sponsors",
        name: "sponsors",
        component: function () {
            return import("../views/Sponsors.vue");
        },
    },
    {
        path: "/catalogView/:id",
        name: "catalog",

        component: function () {
            return import("../views/Catalog.vue");
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
