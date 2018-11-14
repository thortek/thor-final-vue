import Vue from "vue";
import Router from "vue-router"
import Home from "./views/Home.vue"
import Layout from "./views/Layout.vue"
import Login from "./views/Login"
import Remote from "./views/Remote"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
    path: "/layout",
    name: "layout",
    component: Layout
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/remote",
    name: "remote",
    component: Remote
  }
  ]
});
