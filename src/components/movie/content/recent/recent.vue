<template>
  <a class="item" target="_blank" href="javascript:void(0)">
    <div class="cover-wp">
      <img :src="item.images.small" :alt="item.title" @click.naive="turnDetail(item.id)"  onerror="javascript:this.src='http://ww1.sinaimg.cn/large/6259bc22tw1ekt4n6metmj203c04qdfl.jpg';">
    </div>
    <p>{{item.title}}<strong>{{rate}}</strong></p>
  </a>
</template>


<script>
  export default {
    props: ['item'],
    computed:{
      rate(){
        return this.item.rating.average === 0 ? '' : this.item.rating.average;
      }
    },
    methods:{
      turnDetail(id){
        this.$router.push({path:'/movieDetail',query: {id: id}});
      }
    }
  }
</script>


<style></style>
