<template>
  <div id="wrapper">
    <div id="content">
      <div class="grid-16-8 clearfix">
        <div class="article">
          <hot></hot>
          <recent></recent>
        </div>
        <right></right>
        <div class="extra"></div>
      </div>
    </div>
  </div>
</template>


<script>

  export default{
    components:{
      'hot': (resolve) => {
          return require(['./content/hot.vue'],resolve)
      },
      'recent': (resolve) => {
          return require(['./content/recent.vue'],resolve)
      },
      'right': (resolve) => {
          return require(['./content/right.vue'],resolve)
      }
    }
  }
</script>


<style>
  .extra {
    clear: both;
    text-align: right;
  }
  .extra {
    clear: both;
    text-align: right;
  }

</style>
