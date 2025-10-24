import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from "../views/WeatherView.vue";
import CountBookAPI from "../views/CountBookAPI.vue";

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: "/weathercheck", name: "WeatherCheck", component: WeatherView },
  { path: "/CountBookAPI", name: "CountBookAPI", component: CountBookAPI },

  { path: '/getbookcount', name: 'GetBookCount', component: GetBookCountView },

  // Auth routes
  { path: '/firelogin', name: 'FireLogin', component: FirebaseSigninView },
  { path: '/fireregister', name: 'FireRegister', component: FirebaseRegisterView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,


})

export default router
