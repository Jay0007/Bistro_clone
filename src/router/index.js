import Vue from "vue";
import Router from "vue-router";
import innerRoutes from "../components/inner/routes.js";
import outerRoutes from "../components/outer/routes.js";
import inner from "../components/inner/index";
import outer from "../components/outer/index";

Vue.use(Router);
export default new Router({
  mode: "hash",
  routes: [
    // {
    //   path: "/",
    //   redirect: "/login"
    // },
    {
      path: "/login",
      component: outer,
      children: [...outerRoutes]
    },
    {
      path: "/",
      component: inner,
      children: [...innerRoutes],
      // meta: { requiresAuth: true }
    }
  ]
});
