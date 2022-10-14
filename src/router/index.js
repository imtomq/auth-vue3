import { createWebHistory, createRouter } from "vue-router";
import { isLoggedIn } from "../utils/auth";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const News = () => import("@/views/News.vue");

const NotFound = () => import("@/views/NotFound.vue");
const Forbidden = () => import("@/views/Forbidden.vue");

const Login = () => import("@/views/Login.vue");

const SUB_PATH = process.env.NODE_ENV === "production" ? "/" : "development";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children: [{ path: ":id", component: About }],
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/403",
    name: "Forbidden",
    component: Forbidden,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(SUB_PATH),
  routes,
});

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn() && to.name !== "Login") {
    return { name: "Login" };
  }
  if (isLoggedIn() && to.name === "Login") {
    return { name: from.name };
  }
});

export default router;
