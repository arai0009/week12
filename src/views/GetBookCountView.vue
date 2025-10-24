<template>
  <div id="app">
    <h1>Book Counter</h1>

    <button @click="getBookCount">Get Book Count</button>

    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      count: null,
      error: null,
    };
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get(
          "https://countbooks-uw6c5ibcbq-uc.a.run.app"
        );
        this.count = response.data.count;
        this.error = null;
      } catch (err) {
        this.count = null;
        this.error = err.message || "Error fetching book count";
      }
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #2a896a;
}
</style>
