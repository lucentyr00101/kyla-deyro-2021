<template>
  <v-row align-content="space-between">
    <v-col>
      <v-avatar
        color="twitter-primary"
        size="35"
      >
        KD
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
