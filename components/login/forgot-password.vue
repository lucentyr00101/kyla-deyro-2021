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
      Solve for x: 2x + 3 = 17
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false
  })
}
</script>

<style lang="stylus" scoped>
.forgot-password
  font-weight bold
  cursor pointer
  text-decoration underline
  font-size 14px
</style>
