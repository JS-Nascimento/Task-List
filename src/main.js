import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
import { BIcon } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)

Vue.use(BootstrapVueIcons)
Vue.component('b-icon', BIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
