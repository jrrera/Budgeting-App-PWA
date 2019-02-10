import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  state: {
    hello: "world"
  },
  mutations: {},
  actions: {},
  getters: {},
  strict: debug
});

export default store;
