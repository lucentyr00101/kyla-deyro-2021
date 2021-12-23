<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <img class="twitter-icon-blue" :src="twtBlue" alt="twitter-blue">
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <span class="head">{{ msg }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { twtBlue } from '@/utils/meta/icons'

export default {
  props: {
    source: {
      type: String,
      default: () => 'login' // password
    }
  },
  computed: {
    twtBlue () {
      return twtBlue
    },
    msg () {
      const data = {
        login: 'To get started, first enter your phone, email, or @username',
        password: 'Enter your password'
      }
      return data[this.source]
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
  font-weight bold
  font-size 22px
</style>
