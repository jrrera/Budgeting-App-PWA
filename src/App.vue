<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/budget">Budget</router-link>|
      <router-link to="/transaction">Transaction</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
