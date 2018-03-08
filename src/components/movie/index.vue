<template>
  <div>
    <top-bar></top-bar>
    <head-bar></head-bar>
    <content-ha></content-ha>
  </div>

</template>


<script>
  import topBar from './compot/topBar.vue'
  import headBar from './compot/headBar.vue'
  import contentHa from './compot/content.vue'



  export default{
      components:{
          'top-bar':topBar,
          'head-bar':headBar,
          'content-ha':contentHa
      }
  }
</script>


<style>

</style>
