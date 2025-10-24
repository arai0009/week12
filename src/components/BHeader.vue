<template>
  <!-- Simple header with router-links -->
  <header class="nav" style="padding: 0.75rem 1rem; border-bottom: 1px solid #eee;">
    <nav style="display:flex; gap: 1rem; align-items:center;">
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/about" class="link">About</RouterLink>
      <RouterLink to="/GetBookCount" class="link">GetBookCount</RouterLink>
      <router-link to="/weathercheck" class="nav-link" active-class="active">
    Get Weather
    </router-link>
    <router-link
    to="/CountBookAPI"
    class="nav-link"
    active-class="active"
  >
    Count Book API
  </router-link>

      <span style="flex:1"></span>

      <RouterLink to="/FireRegister" class="link">Register</RouterLink>
      <RouterLink to="/FireLogin" class="link">Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.link { text-decoration: none; }
.router-link-active { font-weight: 700; }
</style>
