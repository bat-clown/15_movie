<template>
  <div id="app">
    <top-bar></top-bar>
    <head-bar></head-bar>
    <keep-alive exclude="movieDetail">
      <!--<img src="./assets/logo.png">-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  components:{
      'topBar':(resolve)=>{
          require(['./topBar'],resolve)
      },
      'headBar':(resolve)=>{
          require(['./headBar'],resolve)
      }
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
