import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BIcon, BIconLink45deg } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.component("BIcon", BIcon);
Vue.component("BIconLink45deg", BIconLink45deg);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
