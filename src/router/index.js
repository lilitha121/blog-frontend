import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Blogs from "../views/Blogs.vue";

import Contact from "../views/Contact.vue";
import Profile from "../views/Profile.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   const publicPages = ["/Login", "/Register", "Home"];
//   const authrequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (to.path == "/Blogs" || (to.path == "/Cart" && !loggedIn))
//     next({ name: "Register" });
//   else next();
// });

export default router;