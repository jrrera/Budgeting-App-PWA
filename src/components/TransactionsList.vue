<template>
  <section>
    <header>
      <h3>Past Transactions</h3>
    </header>

    <ul>
      <li v-for="t in transactions" :key="t.id">
        {{ t.payee }}: {{ t.amount }} ({{ t.category }})
      </li>
    </ul>
  </section>
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

const TransactionsList = {
  data: function() {
    return {
      transactions: [mockTransaction]
    };
  }
};
export default TransactionsList;
</script>
