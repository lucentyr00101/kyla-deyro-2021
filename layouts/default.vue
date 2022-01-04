<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <home-head />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomeHead from '@/components/home/head'

export default {
  components: {
    HomeHead
  }
}
</script>
