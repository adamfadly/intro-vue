import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/conditional-rendering",
    name: "Conditional Rendering",

    component: () =>
      import(
        /* webpackChunkName: "ConditionalRendering" */ "../views/ConditionalRendering.vue"
      ),
  },
  {
    path: "/list-rendering",
    name: "List Rendering",

    component: () =>
      import(
        /* webpackChunkName: "ListRendering" */ "../views/ListRendering.vue"
      ),
  },
  {
    path: "/event-handling",
    name: "Event Handling",

    component: () =>
      import(
        /* webpackChunkName: "EventsHandling" */ "../views/EventHandling.vue"
      ),
  },
  {
    path: "/class-style-binding",
    name: "Class Style Binding",

    component: () =>
      import(
        /* webpackChunkName: "ClassStyleBinding" */ "../views/ClassStyleBinding.vue"
      ),
  },
  {
    path: "/computed-properties",
    name: "Computed Properties",

    component: () =>
      import(
        /* webpackChunkName: "ComputedProperties" */ "../views/ComputedProperties.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
