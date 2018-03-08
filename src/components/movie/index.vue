<template>
  <div>
    <top-bar></top-bar>
    <head-bar></head-bar>
    <router-view></router-view>
  </div>
</template>


<script>
  import topBar from './compot/topBar.vue'
  import headBar from './compot/headBar.vue'



  export default{
      components:{
          'top-bar':topBar,
          'head-bar':headBar,
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
