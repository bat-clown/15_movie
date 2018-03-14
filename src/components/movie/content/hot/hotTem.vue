<template>
  <li class="ui-slide-item s">
  <ul>
    <li class="poster">
      <a href="javascript:void(0);" target="">
        <img :src="item.images.small" :alt="item.title" @click="handle" onerror="javascript:this.src='http://ww1.sinaimg.cn/large/6259bc22tw1ekt4n6metmj203c04qdfl.jpg';">
      </a>
    </li>
    <li class="title">
      <a href="javascript:void(0);" @click="handle">{{item.title}}</a>
    </li>
    <li class="rating">
      <span class="rating-star allstar45" v-if="seen"></span>
      <span :class="classObject">{{rate}}</span>
    </li>
    <li class="ticket_btn">
      <span>
        <a href="javascript:void(0);">选座购票</a>
      </span>
    </li>
  </ul>
</li>


</template>


<script>
  export default {
    data(){
      return {
        noRating:"暂无评分",
      }
    },
    computed: {
      seen: function () {
        return this.item.rating.average !== 0;
      },
      classObject: function () {
        return this.item.rating.average !== 0 ? 'subject-rate' : 'text-tip';
      },
      rate: function () {
        return this.item.rating.average === 0 ? this.noRating : this.item.rating.average;
      }
    },
    props:['item'],
    methods:{
      handle(){
        this.$router.push('/subjects/'+this.item.id)
      }
    }
  }
</script>


<style>
  .s .rating {
    display: inline-block;
    zoom: 1;
    margin: 4px auto 2px;
    height: 19px;
  }
  .allstar45 {
    background-position: 0 -11px;
    display: inline-block;
    zoom: 1;
    background: url("../../../../../static/imgs/star_rating.png");
    height: 11px;
    width: 55px;
    margin:0 3px 0 0;
    overflow: hidden;
  }
  .s .rating .rating-star {
    margin: 3px 3px 0 0;
    width: 55px;
  }
  .s .rating span {
    float: left;
  }
  .s .subject-rate {
    color: #e09015;
    font-size: 12px;
    margin-left: 2px;
  }
  .ui-slide-item {
    font-size: 12px;
    text-align: center;
    margin-right: 25px;
    width: 115px;
    height: 270px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    letter-spacing: normal;
    word-spacing: normal;
  }
  .s .poster {
    height: 161px;
    overflow: hidden;
    margin-bottom: 12px;
  }
  .s .ui-slide-content img {
    width: 117px;
  }
  .s .title {
    letter-spacing: -0.31em;
    font-size: 14px;
    white-space: nowrap;
    height: 22px;
    overflow: hidden;
  }
  .s .title a:link, .s .title a:visited, .s .title a:hover, .s .title a:active {
    color: #333;
  }
  .s .title a {
    display: inline-block;
    vertical-align: top;
    letter-spacing: normal;
    word-spacing: normal;
    height: 24px;
    line-height: 24px;
  }

  .s .ticket_btn span {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 90px;
    height: 24px;
    line-height: 24px;
    background-color: #268dcd;
    color: #fff;
    border-radius: 2px;
    font-size: 12px;
  }
  .s .ticket_btn a:link, .s .ticket_btn a:visited, .s .ticket_btn a:hover, .s .ticket_btn a:active {
    background: none;
    color: #fff;
  }
</style>
