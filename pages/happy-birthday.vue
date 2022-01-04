<template>
  <div>
    <tweet
      v-for="(message, i) in tweets"
      :key="i"
      :tweet="message"
    />
    <balloons />
  </div>
</template>

<script>
import Tweet from '@/components/home/tweet'
import Balloons from '@/components/balloons'
import { birthday } from '@/utils/meta/tweets'

export default {
  components: {
    Tweet,
    Balloons
  },
  computed: {
    tweets () {
      return birthday
    }
  }
}
</script>
