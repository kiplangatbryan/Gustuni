import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("../views/discover.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../views/events.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/blog.vue"),
    children: [
      {
        path: "posts/:id",
        component: () => import("../views/blog-spec.vue"),
      },
    ],
  },
  {
    path: "/library",
    name: "library",
    component: () => import("../views/library.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () => import("../views/store.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/account.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
