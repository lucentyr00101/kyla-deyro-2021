<template>
  <v-bottom-navigation
    :value="value"
    grow
    color="twitter-primary"
    background-color="#121212"
  >
    <v-btn @click="$router.push({ name: 'home' })">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="$router.push({ name: 'happy-birthday' })">
      <span>Happy Birthday</span>

      <v-icon>mdi-cake-variant</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  computed: {
    value () {
      const routes = [
        'home',
        'happy-birthday'
      ]
      const name = this.$route.name
      return routes.indexOf(name)
    }
  }
}
</script>
