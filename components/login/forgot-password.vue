<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <span
          class="forgot-password"
          @click="snackbar = true"
        >
          Forgot Password?
        </span>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      color="white"
      text
      rounded="pill"
    >
      <p class="mb-0">
        Username: {{ userName }}
      </p>
      <p class="mb-0">
        Password: {{ passwordChallenge }}
      </p>
    </v-snackbar>
  </div>
</template>

<script>
import { userName, passwordChallenge } from '@/utils/meta/login'

export default {
  data: () => ({
    snackbar: false
  }),
  computed: {
    userName () {
      return userName
    },
    passwordChallenge () {
      return passwordChallenge
    }
  }
}
</script>

<style lang="stylus" scoped>
.forgot-password
  font-weight bold
  cursor pointer
  text-decoration underline
  font-size 14px
</style>
