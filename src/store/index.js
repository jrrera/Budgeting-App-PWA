import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const mockTransaction = {
  id: 1,
  payee: 'Firebrand',
  amount: 10.15,
  category: 'Dining Out',
  date: Date.now(),
  comment: 'Was hungry!'
};

const store = new Vuex.Store({
  state: {
    transactions: [mockTransaction]
  },
  mutations: {},
  actions: {},
  getters: {},
  strict: debug
});

export default store;
