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
    path: "/SuccessfullReview",
    name: "SuccessfullReview",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SuccessfullReview.vue"),
  },
  {
    path: "/SuccessfullSearch",
    name: "SuccessfullSearch",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SuccessfullSearch.vue"),
  },
  {
    path: "/SearchPage",
    name: "SearchPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchPage.vue"),
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
    path: "/InsertLocation",
    name: "InsertLocation",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InsertLocation.vue"),
  },
  {
    path: "/menu",
    name: "menu",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/menu.vue"),
  },
  {
    path: "/SetReview1",
    name: "SetReview1",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SetReview1.vue"),
  },
  {
    path: "/SetReview2",
    name: "SetReview2",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SetReview2.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
