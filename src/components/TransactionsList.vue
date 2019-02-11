<template>
  <section>
    <header>
      <h3>Past Transactions</h3>
    </header>

    <ul>
      <li v-for="t in transactions" :key="t.id">
        {{ t.payee }}: ${{ t.amount }} ({{ t.category }})
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex';

const TransactionsList = {
  computed: mapState(['transactions'])
};

export default TransactionsList;
</script>
