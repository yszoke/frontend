import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  IconsPlugin,
  VBHoverPlugin,
  FormTextareaPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  IconsPlugin,
  VBHoverPlugin,
  FormTextareaPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

import vueHeadful from "vue-headful";

Vue.component("vue-headful", vueHeadful);
Vue.config.productionTip = false;

axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

const shared_data = {
  base_url: "http://localhost:3000",
  username: localStorage.username,
  street: localStorage.street,
  BNum: localStorage.BNum,
  ANum: localStorage.ANum,

  year: localStorage.year,
  review: localStorage.review,
  rank: localStorage.rank,
  price: localStorage.price,
  payments: localStorage.payments,

  setStreet(street) {
    localStorage.setItem("street", street);
  },
  setBuildingNum(num) {
    localStorage.setItem("BNum", num);
  },
  setApartmentNum(num) {
    localStorage.setItem("ANum", num);
  },
  setDetails(year, review, rank, price, payments) {
    localStorage.setItem("year", year);
    localStorage.setItem("review", review);
    localStorage.setItem("rank", rank);
    localStorage.setItem("price", price);
    localStorage.setItem("payments", payments);
  },
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
  },
  logout() {
    localStorage.removeItem("username");
    this.username = undefined;
  },
};

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  render: (h) => h(App),
}).$mount("#app");
