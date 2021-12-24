<template>
  <v-container fluid>
    <home-head />
    <tweet v-for="(message, i) in messages" :key="i" :text="message" />
  </v-container>
</template>

<script>
import HomeHead from '@/components/home/head'
import Tweet from '@/components/home/tweet'
import { messages } from '@/utils/meta/tweets'

export default {
  components: {
    HomeHead,
    Tweet
  },
  computed: {
    messages () {
      return messages
    }
  }
}
</script>
