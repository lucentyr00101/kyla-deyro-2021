<template>
  <form @submit.prevent="validate">
    <v-row>
      <v-col>
        <v-text-field
          :value="userName"
          placeholder="Phone, email, or username"
          hide-details="auto"
          disabled
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="password"
          placeholder="Password"
          :rules="passwordRules"
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
import { passwordChAnswer, passwordRules, userName } from '@/utils/meta/login'
import ForgotPassword from '@/components/login/forgot-password'

export default {
  components: {
    ForgotPassword
  },
  data: () => ({
    password: ''
  }),
  computed: {
    passwordRules () {
      return passwordRules
    },
    passwordChAnswer () {
      return passwordChAnswer
    },
    userName () {
      return userName
    }
  },
  methods: {
    validate () {
      (this.password === passwordChAnswer) && this.$emit('success')
    }
  }
}
</script>
