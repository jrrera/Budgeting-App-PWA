<template>
  <div>
    <section>
      <header>
        <h3>Create a new transaction</h3>
      </header>
      <div
        id="transaction-success-msg"
        v-if="transactionSuccess"
      >Transaction submitted successfully!</div>
      <form id="new-transaction-form" @submit.prevent="addTransaction">
        <div>
          <label class="transaction-label">
            <span>Amount</span>
            <input
              id="transaction-amount"
              type="text"
              placeholder="10.15"
              v-model="amountInput"
              required
            >
          </label>
        </div>
        <div>
          <label class="transaction-label">
            <span>Payee</span>
            <input type="text" placeholder="Firebrand" v-model="payeeInput" required>
          </label>
        </div>
        <div>
          <label class="transaction-label">
            <span>Category</span>
            <select v-model="categoryInput" required>
              <option disabled value>Please select one</option>
              <option
                v-for="category in transactionCategories"
                :value="category.id"
                :key="category.id"
              >{{ category.label }}</option>
            </select>
          </label>
        </div>
        <div>
          <label class="transaction-label">
            <span>Comment</span>
            <input type="text" placeholder="I was hungry!">
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
const NewTransaction = {
  data: function() {
    return {
      categoryInput: 'diningout',
      amountInput: 10.12,
      payeeInput: 'Firebrand',
      transactionSuccess: false
    };
  },
  computed: {
    transactionCategories() {
      return this.$store.state.transactionCategories;
    }
  },
  methods: {
    addTransaction(event) {
      // TODO: Add better validation here.
      if (!this.categoryInput || !this.amountInput || !this.payeeInput) {
        return false;
      }

      this.$store.commit('addTransaction', {
        // TODO: Add better ID generation
        id: Math.random()
          .toString(32)
          .slice(1),
        category: this.categoryInput,
        amount: this.amountInput,
        payee: this.payeeInput
      });
      this.transactionSuccess = true;
    }
  }
};
export default NewTransaction;
</script>

<style scoped>
#new-transaction-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.transaction-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

#new-transaction-form button {
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
  font-size: 1rem;
}

.transaction-label select {
  width: 175px;
}

.transaction-label input,
.transaction-label select {
  font-size: 1rem;
}
</style>
