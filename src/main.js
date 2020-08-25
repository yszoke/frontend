import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
  FormTextareaPlugin
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
  FormTextareaPlugin
].forEach(x => Vue.use(x));
Vue.use(Vuelidate);

import vueHeadful from "vue-headful";

Vue.component("vue-headful", vueHeadful);
Vue.config.productionTip = false;

// const shared_data = {
//   base_url: "http://localhost:4000",
//   username: localStorage.username,
//   login(username) {
//     localStorage.setItem("username", username);
//     this.username = username;
//   },
//   logout() {
//     localStorage.removeItem("username");
//     this.username = undefined;
//   },
// };

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
