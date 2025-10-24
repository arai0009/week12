<template>
  <section class="container">
    <h1>Welcome 👋</h1>
    <p>
      This is the Home page of your Vue 3 + Firebase demo. Use Register/Login to try auth,
      then come back here to see your status.
    </p>

    <div class="card">
      <h2>Status</h2>

      <p v-if="user">
        Signed in as <strong>{{ user.email }}</strong>.
      </p>
      <p v-else>
        You’re not signed in.
      </p>

      <div class="actions" v-if="!user">
        <RouterLink to="/FireRegister">Create an Account</RouterLink>
        <RouterLink to="/FireLogin">Login</RouterLink>
      </div>

      <template v-else>
        <button @click="logout">Sign out</button>
      </template>
    </div>

    <div v-if="user" class="card">
      <h2>Members-only content</h2>
      <p>🎉 You can see this because you’re logged in.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const user = ref(null)
let unsub = null

onMounted(() => {
  unsub = onAuthStateChanged(auth, (u) => { user.value = u })
})

onUnmounted(() => {
  if (unsub) unsub()
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
