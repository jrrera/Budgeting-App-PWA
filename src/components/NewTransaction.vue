<template>
  <div>
    <section>
      <header>
        <h3>Create a new transaction</h3>
      </header>
      <form id="new-transaction-form" @submit.prevent="addTransaction">
        <div>
          <label class="transaction-label">
            <span>Amount</span>
            <input type="text" placeholder="10.15" />
          </label>
        </div>
        <div>
          <label class="transaction-label">
            <span>Payee</span>
            <input type="text" placeholder="Firebrand" />
          </label>
        </div>
        <div>
          <label class="transaction-label">
            <span>Category</span>
            <input type="text" placeholder="Dining Out" />
          </label>
        </div>
        <div>
          <label class="transaction-label">
            <span>Comment</span>
            <input type="text" placeholder="I was hungry!" />
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
    return {};
  },
  methods: {
    addTransaction: event => console.log('Submit', event)
  }
};
export default NewTransaction;
</script>

<style scoped>
#new-transaction-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 25vw;
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

.transaction-label input {
  font-size: 1rem;
}
</style>
