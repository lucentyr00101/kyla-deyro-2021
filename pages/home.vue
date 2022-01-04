<template>
  <div>
    <tweet
      v-for="(message, i) in tweets"
      :key="i"
      :tweet="message"
    />
  </div>
</template>

<script>
import Tweet from '@/components/home/tweet'
import { tweets } from '@/utils/meta/tweets'

export default {
  components: {
    Tweet
  },
  computed: {
    tweets () {
      return tweets
    }
  }
}
</script>
