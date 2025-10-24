<template>
  <section style="max-width: 420px; margin: 2rem auto;">
    <h1>Create an Account</h1>

    <label>Email</label>
    <input v-model="email" type="email" placeholder="you@example.com" />

    <label>Password</label>
    <input v-model="password" type="password" placeholder="Minimum 6 characters" />

    <button :disabled="loading" @click="register">
      {{ loading ? 'Creating...' : 'Register' }}
    </button>

    <p v-if="error" style="color:#c00; margin-top: 0.5rem;">{{ error }}</p>

    <p style="margin-top:1rem;">
      Already have an account?
      <RouterLink to="/FireLogin">Sign in</RouterLink>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const router = useRouter()

const register = async () => {
  error.value = ''
  loading.value = true
  try {
    await createUserWithEmailAndPassword(auth, email.value.trim(), password.value)
    router.push('/FireLogin')
  } catch (e) {
    error.value = friendly(e?.code || e?.message)
  } finally {
    loading.value = false
  }
}

function friendly(code) {
  switch (code) {
    case 'auth/email-already-in-use': return 'Email already in use.'
    case 'auth/invalid-email': return 'Invalid email.'
    case 'auth/weak-password': return 'Password should be at least 6 characters.'
    default: return 'Could not register. Please try again.'
  }
}
</script>

<style scoped>
label { display:block; margin-top: 0.75rem; }
input { width:100%; padding:0.5rem; margin-top:0.25rem; border:1px solid #ccc; border-radius:6px; }
button { margin-top:1rem; width:100%; padding:0.6rem; border:0; border-radius:8px; cursor:pointer; }
</style>
