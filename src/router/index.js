import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/add",
    name: "AddPage",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddPage.vue"),
  },
  {
    path: "/Search",
    name: "SearchPage",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchPage.vue"),
  },
  {
    path: "/success",
    name: "SuccessfullReview",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SuccessfullReview.vue"),
  },
  {
    path: "/WrongEmail",
    name: "WrongEmail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WrongEmail.vue"),
  },
  {
    path: "/ConnectionFaild",
    name: "ConnectionFaild",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ConnectionFaild.vue"),
  },
  {
    path: "/InsertReview",
    name: "InsertReview",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InsertReview.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
