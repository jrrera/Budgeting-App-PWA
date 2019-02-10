<template>
  <div>
    <section>
      <header>
        <h3>New Transaction</h3>
      </header>
      <input type="text" />
    </section>

    <section>
      <header>
        <h4>Past Transactions</h4>
      </header>

      <ul>
        <li v-for="t in transactions" :key="t.id">
          {{ t.payee }}: {{ t.amount }} ({{ t.category }})
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
const mockTransaction = {
  id: 1,
  payee: "Firebrand",
  amount: 10.15,
  category: "Dining Out",
  date: Date.now(),
  comment: "Was hungry!"
};
const NewTransaction = {
  data: function() {
    return {
      transactions: [mockTransaction]
    };
  }
};
export default NewTransaction;
</script>
