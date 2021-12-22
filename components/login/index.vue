<template>
  <v-container>
    <login-head />
    <login-form />
  </v-container>
</template>

<script>
import LoginHead from './head'
import LoginForm from './form'

export default {
  components: {
    LoginHead,
    LoginForm
  }
}
</script>
