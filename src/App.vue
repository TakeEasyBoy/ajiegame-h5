<template>
  <div id="app" class="main-container">
    <transition name="router-fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <div v-show="visiable" @click='backToTop' class='totop'>
      <span>top</span>
    </div>
  </div>
</template>


<script type="text/javascript">
import WebHeader from '@/components/Header'
export default {
  props: {
    /* clientHeight:{
			type:Number,
			default:400
		},
		backPostion:{
			type:Number,
			default:0
		} */
  },
  data() {
    return {
      show: true,
      visiable: false,
      interval: null,
      clientHeight: 200,
      backPosition: 0,
      trueOrfalse: false
    }
  },
  components: {
    WebHeader
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.visiable = window.pageYOffset > this.clientHeight
    },
    backToTop() {
      clearInterval(this.interval)
      const start = window.pageYOffset
      let i = 0
      this.trueOrfalse = true
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition)
          clearInterval(this.interval)
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 5)
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * (--t * (t - 2) - 1) + b
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "style/mixin.scss";
  .main-container {
    width: 100%;
    height: 100%;
    .totop {
      width: 50px;
      height: 50px;
      line-height: 50px;
      background-color: $baseColor;
      opacity: 0.8;
      text-align: center;
      cursor: pointer;
      border-radius: 2px;
      position: fixed;
      right: 2%;
      bottom: 2%;
      z-index: 999;
      span {
        color: #fff;
        font-size: 16px;
      }
    }
  }
</style>
