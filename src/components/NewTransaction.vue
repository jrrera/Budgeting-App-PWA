<template>
  <div>
    <section>
      <header>
        <h3>New Transaction</h3>
      </header>
      <form id="new-transaction-form" @submit.prevent="addTransaction">
        <div>
          <label class="transaction-label">
            Amount
            <input type="text" placeholder="10.15" />
          </label>
        </div>
        <div>
          <label class="transaction-label">
            Payee
            <input type="text" placeholder="Firebrand" />
          </label>
        </div>
        <div>
          <label class="transaction-label">
            Category
            <input type="text" placeholder="Dining Out" />
          </label>
        </div>
        <div>
          <label class="transaction-label">
            Comment
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
    addTransaction: event => console.log("Submit", event)
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
</style>
