<template>
  <form @submit.prevent="validate">
    <v-row>
      <v-col>
        <v-text-field
          v-model="userInput"
          placeholder="Phone, email, or username"
          :rules="rules"
          hide-details="auto"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          rounded
          block
          color="twitter-primary"
          type="submit"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
    <forgot-password />
  </form>
</template>

<script>
import { userName, userNameRules } from '@/utils/meta/login'
import ForgotPassword from '@/components/login/forgot-password'

export default {
  components: {
    ForgotPassword
  },
  data: () => ({
    userInput: ''
  }),
  computed: {
    rules () {
      return userNameRules
    }
  },
  methods: {
    validate () {
      (this.userInput === userName) && this.$emit('success')
    }
  }
}
</script>
