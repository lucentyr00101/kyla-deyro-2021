<template>
  <div>
    <div id="balloon-container" />
    <v-container fluid>
      <v-row>
        <v-col class="text-center">
          <span v-if="count" class="counter">{{ count }}</span>
          <span v-else class="greet red--text">Happy Birthday!</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const random = num => Math.floor(Math.random() * num)

const getRandomStyles = () => {
  const r = random(255)
  const g = random(255)
  const b = random(255)
  const mt = random(200)
  const ml = random(50)
  const dur = random(5) + 5
  return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
  `
}

const createBalloons = (num) => {
  const balloonContainer = document.getElementById('balloon-container')
  for (let i = num; i > 0; i--) {
    const balloon = document.createElement('div')
    balloon.className = 'balloon'
    balloon.style.cssText = getRandomStyles()
    balloonContainer.append(balloon)
  }
}

export default {
  data: () => ({
    count: 1
  }),
  mounted () {
    this.startCountdown()
  },
  methods: {
    startCountdown () {
      setTimeout(() => {
        this.count--
        this.count
          ? this.startCountdown()
          : createBalloons(100)
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
.counter, .greet
  font-size 85px

#balloon-container
  height 100vh
  padding 1em
  box-sizing border-box
  display flex
  flex-wrap wrap
  overflow hidden
  position absolute
  top 0
  .balloon
    height 125px
    width 105px
    border-radius 75% 75% 70% 70%
    position relative
    &:before
      content ""
      height 75px
      width 1px
      padding 1px
      background-color #FDFD96
      display block
      position absolute
      top 125px
      left 0
      right 0
      margin auto
    &:after
      content "▲"
      text-align center
      display block
      position absolute
      color inherit
      top 120px
      left 0
      right 0
      margin auto

@keyframes float {
  from {transform: translateY(100vh)
  opacity: 1}
  to {transform: translateY(-300vh)
  opacity: 0}
}
</style>
