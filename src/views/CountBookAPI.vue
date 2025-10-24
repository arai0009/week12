<template>
  <div class="api-container">
    <h1>Book Count API Result</h1>


    <pre v-if="jsondata">{{ jsondata }}</pre>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CountBookAPI",
  data() {
    return {
      jsondata: null,
      error: null,
    };
  },


  mounted() {
    this.getBookCountAPI();
  },

  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get(
          "https://countbooks-uw6c5ibcbq-uc.a.run.app"
        );

        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        console.error("Error fetching book count:", error);
        this.error = "Error fetching book count.";
        this.jsondata = null;
      }
    },
  },
};
</script>

<style scoped>
.api-container {
  text-align: center;
  margin-top: 50px;
}
pre {
  text-align: left;
  display: inline-block;
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
}
.error {
  color: red;
  margin-top: 20px;
}
</style>
