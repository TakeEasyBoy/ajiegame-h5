<template>
    <div class="home">
      <header class="header">
        <Mcheader></Mcheader>
      </header>
      <main class="home-main-content">
        <div class="main-content margin">
          <section>
            <transition name="el-fade-in-linear" mode="out-in"><router-view></router-view></transition>
          </section>
        </div>
      </main>
      <footer>
        <Mcfooter></Mcfooter>
      </footer>
  </div>
</template>

<script>
  import Mcheader from './Header'
  import Mcfooter from './Footer'
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
      Mcheader,
      Mcfooter
    },
    created() {
    },
    mounted() {
    },
    computed: {
    },
    watch: {
    }
  }
</script>

<style lang='scss' scoped>
  @import 'src/style/mixin';
  .home{
    .home-main-content{
      background: #f8f8f8;
      height: 100%;
      .main-content{
        // padding: 20px;
        overflow: hidden;
      }
    }
  }
</style>
