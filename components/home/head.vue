<template>
  <v-row id="homeHead" align-content="space-between">
    <v-col>
      <v-avatar
        color="twitter-primary"
        size="35"
      >
        <img src="@/assets/images/kd-dp.jpeg">
      </v-avatar>
    </v-col>
    <v-col class="d-flex align-center justify-center">
      <img class="twitter-icon-blue small" :src="twtBlue" alt="twitter-blue">
    </v-col>
    <v-col class="text-right d-flex align-center justify-end">
      <img class="xsmall" src="@/assets/icons/top-tweets.svg" alt="top-tweets">
    </v-col>
  </v-row>
</template>

<script>
import { twtBlue } from '@/utils/meta/icons'

export default {
  computed: {
    twtBlue () {
      return twtBlue
    }
  }
}
</script>

<style lang="stylus" scoped>
#homeHead
  border-bottom 1px solid rgb(47, 51, 54)
  position absolute
  top 12px
  width 100%
  background #121212
  z-index 10
</style>
