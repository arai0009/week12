<template>
  <div>
    <BHeader />
    <main class="container" style="padding: 1rem;">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BHeader from './components/BHeader.vue'
</script>
