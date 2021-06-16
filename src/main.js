import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { store } from "./store/store";

import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
axios.defaults.headers.common["authtoken"] = localStorage.getItem("authtoken");
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!window.localStorage.getItem("authtoken")) {
      console.log("global ckecker failed");
      next({ path: "/login" });
    } else {
      console.log("global ckecker pass");
      next();
    }
  } else {
    next();
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
