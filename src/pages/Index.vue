<template>
  <div class="mc-index">
    <!-- 轮播 S -->
    <div class="index-swipe">
      <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img :src="item.image">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <div class="input-search">
      <cube-input
        style="width:280px;"
        v-model="serchkey"
        placeholder="请输入游戏进行搜索">
      </cube-input>
      <cube-button :inline="true">搜索</cube-button>
    </div>
    <cube-button class="btn">Button</cube-button>
    <div>123</div>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ],
        serchkey: ''
      }
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
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
    .input-search{
      display: flex;
      justify-content: space-between;
      width: 360px;
      margin: 10px auto;
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
