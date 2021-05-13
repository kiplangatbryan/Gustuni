import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./quasar";
import VisualAudio from "vue-audio-visual";

import VueTinySlider from "vue-tiny-slider";
import player from "./components/player.vue";
import "tiny-slider/src/tiny-slider.scss";

Vue.component("tiny-slider", VueTinySlider);
Vue.component("lu-player", player);

Vue.use(VisualAudio);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
