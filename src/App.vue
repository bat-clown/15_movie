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
  #wrapper{
    color: #111;
    width: 1040px;
    margin:0 auto;
  }
  #content {
    min-height: 420px;
  }
  .grid-16-8 .article{
    float: left;
    width: 675px;
    padding-right: 40px;
  }
  .grid-16-8 .aside {
    float: right;
    width: 300px;
  }
</style>
