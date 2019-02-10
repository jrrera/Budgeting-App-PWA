<template>
  <main>
    <h1>New Transaction</h1>
    <NewTransaction />
  </main>
</template>

<script>
import NewTransaction from "@/components/NewTransaction.vue";
console.log(NewTransaction);
export default {
  name: "Transactions",
  components: {
    NewTransaction
  }
};
</script>
