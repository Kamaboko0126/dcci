import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/HomePage.vue"),
  },
  {
    path: "/journallist",
    name: "journallist",
    component: () => import("@/components/JournalList/"),
  },
  {
    path: "/journallist/journal",
    name: "journal",
    component: () => import("@/components/JournalList/JournalPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
