<template>
  <div>
    shouye
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgUrls" :key="index">
        <img :src="item" alt="" srcset="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgUrls: [
          'https://static.jiaoyimao.com/resource/public/gnk/2019/2/28/a8a6f3d0-5c20-4966-863b-cf5e61e1080a.jpg',
          'https://static.jiaoyimao.com/resource/public/gnk/2019/2/28/1dcd0335-86e1-4b07-9934-ff157a093858.jpg',
          'https://static.jiaoyimao.com/resource/public/gnk/2019/3/1/31eefc62-0d5b-4277-aa35-356332688e4b.jpg'
        ]
      }
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {}
  }
</script>
<style lang='scss' scoped>
    @import 'src/style/mixin';
</style>
