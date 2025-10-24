<template>
  <section class="container">
    <h1>About</h1>
    <p>
      This demo shows Firebase Email/Password auth in a Vue 3 + Vite app.
      Use the links below to register or sign in, then come back to see your status.
    </p>

    <div class="card">
      <h2>Auth status</h2>

      <p v-if="user">
        Signed in as <strong>{{ user.email }}</strong>.
      </p>
      <p v-else>
        You’re not signed in.
      </p>

      <div class="actions" v-if="!user">
        <RouterLink to="/FireLogin">Go to Login</RouterLink>
        <RouterLink to="/FireRegister">Create an Account</RouterLink>
      </div>

      <button v-else @click="logout">Sign out</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const user = ref(null)
let unsubscribe = null

onMounted(() => {
  unsubscribe = onAuthStateChanged(auth, (u) => { user.value = u })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

const logout = async () => {
  await signOut(auth)
}
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.card {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
}
.actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
button {
  margin-top: 0.5rem;
  padding: 0.6rem 0.9rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}
</style>
