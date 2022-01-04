<template>
  <div>
    <tweet
      v-for="(message, i) in messages"
      :key="i"
      :text="message"
    />
  </div>
</template>

<script>
import Tweet from '@/components/home/tweet'
import { messages } from '@/utils/meta/tweets'

export default {
  components: {
    Tweet
  },
  computed: {
    messages () {
      return messages
    }
  }
}
</script>
