<template>
  <div id="screening" class="s" data-dstat-areaid="70" data-dstat-mode="click,expose">
    <div class="screening-hd">
      <div class="ui-slide-control">
        <span class="prev-btn"><a class="btn-prev" href="javascript:void(0)"></a></span>
        <span class="next-btn"><a class="btn-next" href="javascript:void(0)"></a></span>
      </div>
      <div class="slide-tip"><span class="ui-slide-index">{{currentNum}}</span> / <span class="ui-slide-max">{{totalNum}}</span></div>
      <h2>正在热映<span><a href="/cinema/nowplaying/">全部正在热映»</a></span><span><a
        href="./later/">即将上映»</a></span></h2>
    </div>
    <div class="screening-bd">
      <transition-group tag="ul" name="list" mode="out-in" class="ui-slide-content" :style="{left:left+'px'}">
        <li-parent  v-for="(item,index) in movieList" :key="index" :index="index" :item="item"></li-parent>
      </transition-group>
    </div>
  </div>
</template>


<script>
  export default{
      data(){
          return {
            movieList:[],
            left:-700
          }
      },
      computed:{
          totalNum:function () {
            return Math.ceil(this.movieList.length/5);
          },
          currentNum:function () {
            return Math.abs(this.left/700);
          }
      },
      mounted(){
          this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(function(res){
            this.movieList = JSON.parse(res.bodyText).subjects;
            console.log(this.movieList);
          },function(res){
            this.movieList = res;
            console.log(this.movieList);
          });
      },
      components:{
          'li-parent':{
              template:`  <li class="ui-slide-item s">
                            <ul>
                              <li class="poster">
                                <a href="javascript:void(0);" target="">
                                   <img :src="item.images.small" alt="" onerror="javascript:this.src='http://ww1.sinaimg.cn/large/6259bc22tw1ekt4n6metmj203c04qdfl.jpg';">
                                </a>
                              </li>
                              <li class="title">
                                <a href="javascript:void(0);">{{item.title}}</a>
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
                        `,
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
  #screening .ui-slide-item {
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
  #screening .poster {
    height: 161px;
    overflow: hidden;
    margin-bottom: 12px;
  }
  #screening .ui-slide-content img {
    width: 128px;
  }
  #screening .title {
    letter-spacing: -0.31em;
    font-size: 14px;
    white-space: nowrap;
    height: 22px;
    overflow: hidden;
  }
  #screening .title a:link, #screening .title a:visited, #screening .title a:hover, #screening .title a:active {
    color: #333;
  }
  #screening .title a {
    display: inline-block;
    vertical-align: top;
    letter-spacing: normal;
    word-spacing: normal;
    height: 24px;
    line-height: 24px;
  }
  #screening .rating {
    display: inline-block;
    zoom: 1;
    margin: 4px auto 2px;
    height: 19px;
  }
  .allstar45 {
    background-position: 0 -11px;
    display: inline-block;
    zoom: 1;
    background: url("../../../static/imgs/star_rating.png");
    height: 11px;
    width: 55px;
    margin:0 3px 0 0;
    overflow: hidden;
  }
  #screening .rating .rating-star {
    margin: 3px 3px 0 0;
    width: 55px;
  }
  #screening .rating span {
    float: left;
  }
  #screening .subject-rate {
    color: #e09015;
    font-size: 12px;
    margin-left: 2px;
  }
  #screening .ticket_btn span {
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
  #screening .ticket_btn a:link, #screening .ticket_btn a:visited, #screening .ticket_btn a:hover, #screening .ticket_btn a:active {
    background: none;
    color: #fff;
  }
</style>
