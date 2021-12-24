<template>
  <v-container>
    <login-head />
    <login-form
      v-if="screen === 'login'"
      @success="screen = 'password'"
    />
    <password-form
      v-else-if="screen === 'password'"
      @success="success"
    />
  </v-container>
</template>

<script>
import LoginHead from './head'
import LoginForm from './form'

export default {
  components: {
    LoginHead,
    LoginForm,
    PasswordForm: () => import('./password')
  },
  data: () => ({
    screen: 'login'
  }),
  methods: {
    async success () {
      await this.$store.commit('setAuth', true)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
