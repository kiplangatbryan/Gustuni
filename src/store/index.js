import Vue from "vue";
import Vuex from "vuex";
import blog from "./blog";
import user from "./user";
import settings from "./settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    settings,
    blog,
    user,
  },
});
