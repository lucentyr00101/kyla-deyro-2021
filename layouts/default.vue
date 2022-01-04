<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <home-head />
      </v-container>
      <div class="main-wrapper height custom-scrollbar">
        <v-container fluid>
          <Nuxt />
        </v-container>
      </div>
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

<style lang="stylus" scoped>
.height
  max-height 92vh
  overflow-y auto
  overflow-x hidden
.main-wrapper
  margin-top 38px
</style>
