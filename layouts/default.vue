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
      <bottom-nav />
    </v-main>
  </v-app>
</template>

<script>
import HomeHead from '@/components/home/head'
import BottomNav from '@/components/bottom-nav'

export default {
  components: {
    HomeHead,
    BottomNav
  }
}
</script>

<style lang="stylus" scoped>
.height
  max-height 91vh
  min-height 91vh
  overflow-y auto
  overflow-x hidden
.main-wrapper
  margin-top 38px
</style>
