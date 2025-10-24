<template>
  <section style="max-width: 420px; margin: 2rem auto;">
    <h1>Sign in</h1>

    <label>Email</label>
    <input v-model="email" type="email" placeholder="you@example.com" />

    <label>Password</label>
    <input v-model="password" type="password" placeholder="Your password" />

    <button :disabled="loading" @click="signin">
      {{ loading ? 'Signing in...' : 'Sign in' }}
    </button>

    <p v-if="error" style="color:#c00; margin-top: 0.5rem;">{{ error }}</p>

    <p style="margin-top:1rem;">
      New here?
      <RouterLink to="/FireRegister">Create an account</RouterLink>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const router = useRouter()

const signin = async () => {
  error.value = ''
  loading.value = true
  try {
    await signInWithEmailAndPassword(auth, email.value.trim(), password.value)
    router.push('/') 
  } catch (e) {
    error.value = friendly(e?.code || e?.message)
  } finally {
    loading.value = false
  }
}

function friendly(code) {
  switch (code) {
    case 'auth/invalid-email': return 'Invalid email.'
    case 'auth/user-not-found':
    case 'auth/wrong-password': return 'Incorrect email or password.'
    case 'auth/too-many-requests': return 'Too many attempts. Try again later.'
    default: return 'Could not sign in. Please try again.'
  }
}
</script>

<style scoped>
label { display:block; margin-top: 0.75rem; }
input { width:100%; padding:0.5rem; margin-top:0.25rem; border:1px solid #ccc; border-radius:6px; }
button { margin-top:1rem; width:100%; padding:0.6rem; border:0; border-radius:8px; cursor:pointer; }
</style>
