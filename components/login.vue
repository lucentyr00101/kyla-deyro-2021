<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <img class="twitter-icon-blue" :src="twtBlue" alt="twitter-blue">
      </v-col>
    </v-row>
  </v-container>
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
