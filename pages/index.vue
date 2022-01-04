<template>
  <div>
    <template v-if="showSplash">
      <v-fade-transition hide-on-leave>
        <splash-screen />
      </v-fade-transition>
    </template>
    <template v-else>
      <v-slide-x-transition>
        <login />
      </v-slide-x-transition>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  components: {
    SplashScreen: () => import('@/components/splash-screen'),
    Login: () => import('@/components/login')
  },
  layout: 'auth',
  data: () => ({
    timer: 10
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
