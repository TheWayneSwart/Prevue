<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const loading = ref(false)
const showPassword = ref(false)

const rules = {
    email: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    password: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters'
    ]
}

const handleLogin = async () => {
    loading.value = true
    // Simulate API call
    setTimeout(() => {
        loading.value = false
        console.log('Login attempt:', { email: email.value, password: password.value })
    }, 5000)
}
</script>

<template><v-container class="d-flex justify-center align-center fill-height" fluid>
    <v-card class="login-card pa-8 rounded-xl" width="500" elevation="3">
        <div class="text-center mb-6">
            <v-img src="@/assets/logo/prevue_rocket.png" width="100" height="100" class="mb-4 mx-auto" />
            <h1 class="text-h4 font-weight-bold text-primary">Welcome to Prevue</h1>
            <p class="text-body-2 text-medium-emphasis mt-2">Sign in to your account</p>
        </div>

        <v-form @submit.prevent="handleLogin">
            <v-text-field v-model="email" label="Email" type="email" prepend-inner-icon="mdi-email" variant="outlined"
                :rules="rules.email" required class="mb-4" />

            <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword" variant="outlined" :rules="rules.password" required
                class="mb-6" />

            <v-btn type="submit" color="primary" size="large" block :loading="loading" :disabled="!email || !password"
                class="mb-4">
                Sign In
            </v-btn>

            <div class="text-center">
                <v-btn variant="text" color="primary" size="small" class="text-caption">
                </v-btn>
            </div>
        </v-form>
    </v-card>
</v-container></template>