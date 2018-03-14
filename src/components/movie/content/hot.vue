<template>
  <div id="screening" class="s">
    <div class="screening-hd">
      <div class="ui-slide-control">
        <span class="prev-btn"><a class="btn-prev" href="javascript:void(0)" @click="prevPage"></a></span>
        <span class="next-btn"><a class="btn-next" href="javascript:void(0)" @click="nextPage"></a></span>
      </div>
      <div class="slide-tip"><span class="ui-slide-index">{{currentNum}}</span> / <span class="ui-slide-max">{{totalNum}}</span></div>
      <h2>正在热映<span><a href="javascript:void(0);">全部正在热映»</a></span><span><a
        href="javascript:void(0);">即将上映»</a></span></h2>
    </div>
    <div class="screening-bd">
      <ul class="ui-slide-content" :style="{left:left+'px'}">
        <li-parent  v-for="(item,index) in movingList.subjects" :key="index" :index="index" :item="item"></li-parent>
      </ul>
    </div>
  </div>
</template>


<script>
  export default{
      data(){
          return {
            left:0,
            item:{}
          }
      },
    methods:{
          nextPage(){
              this.left -= 700;
              if(this.left < -2100){
                  this.left = 0;
              }
          },
          prevPage(){
              this.left += 700;
              if(this.left > 0){
                  this.left = -2100
              }
          }
    },
      computed:{
        totalNum:function () {
          return Math.ceil(this.movingList.subjects.length/5);
        },
        currentNum:function () {
          return Math.abs(this.left/700)+1;
        },
        movingList:function () {
          return this.$store.getters.movingList
        }
      },
      mounted(){
          this.$store.dispatch('getMoving')
      },
      components:{
          'li-parent': (resolve) => {
              return require(['./hot/hotTem.vue'],resolve)
          }
      }
  }
</script>


<style>
  #screening .screening-bd {
    overflow: hidden;
    position: relative;
    height: 270px;
  }
  .ui-slide-content {
    position: absolute;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    letter-spacing: -0.31em;
    font-size: 0;
  }
  .ui-slide-control {
    float: right;
    margin: 5px 0 0 15px;
  }
</style>
