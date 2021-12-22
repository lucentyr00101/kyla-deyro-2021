<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="userInput"
          placeholder="Phone, email, or username"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          rounded
          block
          color="twitter-primary"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
    <forgot-password />
  </div>
</template>

<script>
import ForgotPassword from '@/components/login/forgot-password'

export default {
  components: {
    ForgotPassword
  },
  data: () => ({
    userInput: ''
  })
}
</script>
