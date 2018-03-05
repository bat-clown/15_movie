<template>
  <div id="wrapper">
    <div id="content">
      <div class="grid-16-8 clearfix">
        <div class="article">
          <hot></hot>
          <recent></recent>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import hot from './content/hot.vue';
import recent from './content/recent.vue'
  export default{
    components:{
      'hot':hot,
      'recent':recent
    }
  }
</script>


<style></style>
