var login = () => import("./login/index");
var register = () => import("./register/index");
export default [
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  }
];
