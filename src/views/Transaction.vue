<template>
  <main>
    <h1>Transactions</h1>
    <p>Manage existing transactions and log new purchases/income here.</p>
    <NewTransaction />
    <hr />
    <TransactionsList />
  </main>
</template>

<script>
import { NewTransaction, TransactionsList } from '@/components';
export default {
  name: 'Transactions',
  components: {
    NewTransaction,
    TransactionsList
  }
};
</script>
