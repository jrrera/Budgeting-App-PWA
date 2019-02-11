<template>
  <main>
    <h1>Transactions</h1>
    <NewTransaction />
    <hr />
    <TransactionsList />
  </main>
</template>

<script>
import NewTransaction from '@/components/NewTransaction.vue';
import TransactionsList from '@/components/TransactionsList.vue';
export default {
  name: 'Transactions',
  components: {
    NewTransaction,
    TransactionsList
  }
};
</script>
