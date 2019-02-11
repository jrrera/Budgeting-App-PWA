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

const mockCategories = [
  { id: 'diningout', label: 'Dining Out' },
  { id: 'coffeetea', label: 'Coffee/Tea' },
  { id: 'education', label: 'Education' },
  { id: 'fitness', label: 'Fitness' }
];

const store = new Vuex.Store({
  state: {
    transactions: [mockTransaction],
    transactionCategories: mockCategories
  },
  mutations: {
    addTransaction(state, payload) {
      state.transactions = [...state.transactions, payload];
    }
  },
  actions: {},
  getters: {},
  strict: debug
});

export default store;
