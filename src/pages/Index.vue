<template>
  <div class="mc-index">
    <!-- 轮播 S -->
    <div class="index-swipe">
      <mt-swipe :auto="0" >
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index">
          <img :src="item" alt="" srcset="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播 E -->
    <!-- grid S -->
    <ul class="grid margintop30">
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-account"></span><span>账号</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-currency"></span><span>游戏币</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-props"></span><span>道具</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-rent"></span><span>租号</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-dailian"></span><span>代练</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-gift"></span><span>礼包</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-android"></span><span>充值中心</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-precharge"></span><span>首冲号</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-pc"></span><span>端游</span></a></li>
      <li class="grid-content"><a href="/"><span class="icon-menu icon-menu-wzry"></span><span>王者荣耀</span></a></li>
    </ul>
    <!-- grid E -->
    <mt-button type="default" size="small" @click="handleClick">default</mt-button>
    <mt-button type="primary" size="small" @click="handleClick">primary</mt-button>
    <mt-button type="danger" size="small" @click="handleClick">danger</mt-button>
    <p class='ts-font'>我去你奶奶个最</p>
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
    methods: {
      handleClick() {
        alert('asdf')
      }
    }
  }
</script>
<style lang='scss'>
  @import 'src/style/mixin';
  .mc-index{
    .index-swipe{
      width: 100%;
      height: 208px;
      overflow: hidden;
      img{
        display: inline-block;
        width: 100%;
        height: 208px;
      }
      .mint-swipe-item{
        &:nth-of-type(1) .item{
          height: 208px;
        width: 100%;
          background: #f00
        }
        &:nth-of-type(2) .item{
          height: 208px;
        width: 100%;
          background: #00f
        }
        &:nth-of-type(3) .item{
          height: 208px;
        width: 100%;
          background: #0f0
        }
      }
    }
    .grid{
      width: 98%;
      height: 130px;
      background: #fff;
      margin: 10px auto;
      padding: 15px 0;
      border: 1px solid #d9d9d9;
      font-size: 11px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .grid-content{
      width: 20%;
      height: 65px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      span{
        display: block;
        text-align: center;
      }
    }
    .icon-menu-account {
      background-position: -355px -246px
    }
    .icon-menu-android {
      background-position: -355px 0
    }
    .icon-menu-apple {
      background-position: -355px -41px
    }
    .icon-menu-currency {
      background-position: -355px -82px
    }
    .icon-menu-dailian {
      background-position: -355px -123px
    }
    .icon-menu-gift {
      background-position: -355px -164px
    }
    .icon-menu-pc {
      background-position: -246px -315px
    }

    .icon-menu-precharge {
      background-position: 0 -315px
    }
    .icon-menu-props {
      background-position: -41px -315px
    }
    .icon-menu-rent {
      background-position: -82px -315px
    }
    .icon-menu-sale {
      background-position: -123px -315px
    }
    .icon-menu-sell {
      background-position: -164px -315px
    }
    .icon-menu-wzry {
      width: 60px;
      height: 42px;
      background-position: -186px -126px
    }
    .icon-menu{
      @include wh(36px,36px);
    }
  }
</style>
