<template>
  <v-row class="tweet">
    <v-col cols="auto">
      <v-avatar size="45">
        <img src="@/assets/images/r-dp.jpeg" alt="rdp">
      </v-avatar>
    </v-col>
    <v-col>
      <p class="user bold">
        яαηz sαяcσs
        <span class="gray normal">
          @Lucentyr00101
          ·
          1h
        </span>
      </p>
      <p class="text">
        {{ text }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => 'Sample text only'
    }
  }
}
</script>

<style lang="stylus" scoped>
.text
  font-size 14px
  margin-bottom 5px
.tweet
  border-bottom 1px solid rgb(47, 51, 54)
.user
  font-size 14px
  margin-bottom 3px
.bold
  font-weight 600
.normal
  font-weight normal
.gray
  color rgb(110, 118, 125)
</style>
