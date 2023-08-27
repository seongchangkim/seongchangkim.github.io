import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BIcon, BIconLink45deg } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.component("BIcon", BIcon);
Vue.component("BIconLink45deg", BIconLink45deg);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
