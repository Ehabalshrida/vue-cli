import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
const emitter = mitt();
const CreateApp = createApp(App);
CreateApp.provide("emitter", emitter).use(router).mount("#app");
CreateApp.directive("fontSize", (ele, action) => {
  // console.log({ ele });
  // console.log({ action });
  ele.style.fontSize = action.value + "px";
});
CreateApp.directive("color", (ele, action) => {
  // console.log({ ele });
  // console.log({ action });
  ele.style.color = action.value;
});
CreateApp.directive("backGround", (ele, action) => {
  // console.log({ ele });
  // console.log({ action });
  ele.style.backgroundColor = action.value;
});
