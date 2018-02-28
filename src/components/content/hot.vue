<template>
  <div id="screening" class="s" data-dstat-areaid="70" data-dstat-mode="click,expose">
    <div class="screening-hd">
      <div class="ui-slide-control">
        <span class="prev-btn"><a class="btn-prev" href="javascript:void(0)"></a></span>
        <span class="next-btn"><a class="btn-next" href="javascript:void(0)"></a></span>
      </div>
      <div class="slide-tip"><span class="ui-slide-index">5</span> / <span class="ui-slide-max">8</span></div>
      <h2>正在热映<span><a href="/cinema/nowplaying/">全部正在热映»</a></span><span><a
        href="./later/">即将上映»</a></span></h2>
    </div>
    <div class="screening-bd" style="visibility:visible;overflow:hidden;position: relative;;
    z-index:2;left: 0;width: 770px;">
      <ul class="ui-slide-content" style="margin:0;padding:0;position:relative;list-style-type:none;
      z-index:1;">
        <li-parent></li-parent>
      </ul>
    </div>
  </div>
</template>


<script>
  export default{
      data(){
          return {

          }
      },
      mounted(){
//          this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(function(res){
//              console.log(JSON.parse(res.bodyText));
//          },function(res){
//              console.log(res);
//          });
      },
      components:{
          'li-parent':{
              template:`  <li style="overflow:hidden;float:left;width:134px;height:246px;">
                            <a href="javascript:void(0);" target="">
                                 <img src="" alt="" onerror="javascript:this.src='http://ww1.sinaimg.cn/large/6259bc22tw1ekt4n6metmj203c04qdfl.jpg';">
                                 <span class="item-title" title="">红色行动</span>
                                 <span class="item-pubtime" title="">2018/02/02</span>
                            </a>
                          </li>
                        `,
            data(){
                  return {

                  }
            }
          }
      }
  }
</script>


<style>
  .item-pubtime, .item-title, .item-addtime{
    display: block;
    margin:5px 0 5px 0;
    width:100%;
    font-size: 12px;
  }
  .item-title{
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;
    color: #333;
    font-size: 14px;
    cursor: pointer;
  }
  .ui-slide-content li{
    text-align: center;
  }
  .ui-slide-content a:hover span{
    color:#4b8ccb;
  }

  .ui-slide-content span{
    color: #666;
  }
</style>
