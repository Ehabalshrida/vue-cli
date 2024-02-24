import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue";
import UseSlot from "@/views/UseSlot.vue";
import UseMixins from "@/views/UseMixins.vue";
import RoutApply from "@/views/RoutApply.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import ListProfiles from "@/views/ListProfiles.vue";
import MyTasks from "@/views/MyTasks.vue";
import MyNotes from "@/views/MyNotes.vue";
import WatchProp from "@/views/WatchProp.vue";
import ProvideInject from "@/views/ProvideInject.vue";
import NoPage from "@/views/NoPage.vue";

const routes = [
  { name: "MyMain", path: "/", component: MyMain },
  { name: "ProvideInject", path: "/provide-inject", component: ProvideInject },
  { name: "WatchProp", path: "/watch-prop", component: WatchProp },
  { name: "AboutPage", path: "/about", component: AboutPage },
  { name: "USeSlot", path: "/use", component: UseSlot },
  { name: "UseMixins", path: "/mix", component: UseMixins },
  {
    name: "RoutApply",
    path: "/test",
    component: RoutApply,
    meta: {
      title: "RoutApply",
      description: "RoutApplyDescription",
    },
  },
  {
    name: "Profile",
    path: "/profile/:userId/:userName",
    component: ProfilePage,
    children: [
      {
        name: "MyTasks",
        path: "my-tasks",
        component: MyTasks,
      },
      {
        name: "MyNotes",
        path: "my-notes",
        component: MyNotes,
      },
    ],
  },
  {
    name: "ListProfiles",
    path: "/listProfiles",
    component: ListProfiles,
  },
  { name: "NoPage", path: "/:pathMatch(.*)*", component: NoPage },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log({ to, from });
  if (to.name === "USeSlot") {
    // next({ name: "AboutPage" });
    router.push({ name: "AboutPage" });
  }
  document.title = to.name;
  next();
});
export default router;
