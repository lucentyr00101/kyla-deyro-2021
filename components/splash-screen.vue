<template>
  <div id="fullScreenLoader">
    <img :src="twtWhite" alt="twitter-white">
  </div>
</template>

<script>
import { twtWhite } from '@/utils/meta/icons'

export default {
  computed: {
    twtWhite () {
      return twtWhite
    }
  }
}
</script>

<style lang="stylus" scoped>
#fullScreenLoader
  height 100vh
  background #1DA1F2
  display flex
  align-items center
  justify-content center
  img
    width 65px
    max-width 65px
</style>
