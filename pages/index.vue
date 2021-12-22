<template>
  <div>
    <v-fade-transition>
      <splash-screen v-if="showSplash" />
      <login v-else />
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  components: {
    SplashScreen: () => import('@/components/splash-screen'),
    Login: () => import('@/components/login')
  },
  data: () => ({
    timer: 0
  }),
  computed: {
    showSplash () {
      return this.timer
    }
  },
  created () {
    this.runTimer()
  },
  methods: {
    runTimer () {
      setTimeout(() => {
        if (this.timer) {
          this.timer--
          this.runTimer()
        }
      }, 1000)
    }
  }
}
</script>
