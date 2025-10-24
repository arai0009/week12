<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
    </div>

    <div class="search-bar">
      <input
        type="text"
        v-model="city"
        placeholder="Enter city name"
        class="search-input"
      />
      <button @click="fetchWeatherrByCity" class="search-button">
        Search
      </button>
    </div>


    <main v-if="weatherData">
      <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>

      <div class="weather-info">
        <img :src="iconUrl" alt="Weather Icon" />
        <p>{{ temperature }} °C</p>
      </div>

      <p>{{ weatherData.weather[0].description }}</p>
    </main>

    <!-- Error message -->
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from "axios";

const apikey = "9010a5274c4a46ee05a1b04822b28514";

export default {
  name: "WeatherView",
  data() {
    return {
      city: "",
      weatherData: null,
      errorMessage: "",
    };
  },

  computed: {
    // Temperature in Celsius
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp)
        : null;
    },

    // Weather icon link
    iconUrl() {
      return this.weatherData
        ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : "";
    },
  },

  methods: {
    async fetchWeatherByCity() {
      if (!this.city.trim()) {
        this.errorMessage = "Please enter a city name.";
        this.weatherData = null;
        return;
      }

      try {
        this.errorMessage = "";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}&units=metric`;
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.errorMessage =
          error.response?.data?.message === "city not found"
            ? "City not found. Please try again."
            : "Unable to fetch weather data. Check API key or connection.";
        this.weatherData = null;
      }
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
.header h1 {
  font-weight: bold;
  margin-bottom: 20px;
}
.search-bar {
  margin: 20px 0;
}
.search-input {
  padding: 10px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}
.search-button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.search-button:hover {
  background-color: #2e8b6d;
}
.weather-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.error {
  color: red;
  margin-top: 15px;
  font-weight: 500;
}
</style>
