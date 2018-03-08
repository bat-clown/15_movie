<template>
  <div class="aside">
    <div class="rating_answer">
      <ul>
        <li>
          <a href="https://blog.douban.com/douban/2015/12/18/3060/" target="_blank">豆瓣电影评分八问</a>
        </li>
      </ul>
    </div>
    <div class="hot_link">
      <h2> 电影活动 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;· </h2>
      <ul>
        <li>
          <a href="https://www.douban.com/note/659893820/" data-bid="2561" target="_blank">
            一周大新闻！3月吃土，4月迎接北影节
          </a>
        </li>
        <li>
          <a href="https://site.douban.com/oscar/" data-bid="2560" target="_blank">
            年度最期待！第90届奥斯卡完整获奖名单
          </a>
        </li>
      </ul>
    </div>
    <div id="billboard" class="s" data-dstat-areaid="75" data-dstat-mode="click,expose">
      <div class="billboard-hd">
        <h2>本周口碑榜<span><a href="/chart">更多榜单»</a></span></h2>
      </div>
      <div class="billboard-bd">
        <table>
          <tbody>
            <tr-parent v-for="(item,index) in weeklyList" :key="index" :item="item"></tr-parent>
          </tbody>
        </table>
      </div>
    </div>
    <div id="doulist">
      <h2>热门豆列</h2>
      <ul>
        <li>
          <span>6761推荐</span>
          <div class="title"><a target="_blank" href="https://www.douban.com/doulist/42564/">北京电影学院硕士要看的100部电影</a></div>
        </li>
        <li>
          <span>1067推荐</span>
          <div class="title"><a target="_blank" href="https://www.douban.com/doulist/278539/">【真实犯罪】—— 真人真事改编案件（中国版）</a></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default{
    data(){
        return {
          weeklyList:[{id:1,name:'养家之人'},{id:2,name:'小萝莉的猴神大叔'},{id:3,name:'天上再见'},
                      {id:4,name:'无手的少女'},{id:5,name:'比得兔'},{id:6,name:'无巧不成婚'},
                      {id:7,name:'那就是我的世界'},{id:8,name:'金钱世界'},{id:9,name:'乐高DC超级英雄：闪电侠'},
                      {id:10,name:'怪奇秀'}],
          item:''
        }
    },
    components:{
        'tr-parent':{
            template:`<tr>
                        <td class="order">{{item.id}}</td>
                        <td class="title"><a  href="javascript:void(0)">{{item.name}}</a></td>
                      </tr>`,
          props:['item']
        }
    }
  }
</script>

<style>
  .rating_answer {
    margin: 0 0 20px;
    padding: 12px 0 12px 18px;
    line-height: 1.5;
    background: #f2f7f6;
    border-radius: 4px;
    width: 282px;
  }
  .rating_answer ul {
    color: #cedcd9;
  }
  .rating_answer li {
    list-style: none;
    font-size: 13px;
  }
  .hot_link {
    margin: 0 0 20px;
    padding: 16px 0 16px 18px;
    line-height: 1.5;
    background: #f2f7f6;
    border-radius: 4px;
    width: 282px;
  }
  #content .hot_link h2 {
    margin: 0;
    padding: 0;
    border: 0 none;
    color: #072;
  }
  .hot_link ul {
    color: #cedcd9;
  }
  .hot_link li {
    margin-top: 8px;
    list-style: none;
    font-size: 13px;
  }
  #billboard {
    margin-bottom: 50px;
    display: inline-block;
    zoom: 1;
  }
  #billboard h2 {
    margin-bottom: 5px;
    color: #111;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
  }
  #billboard h2 span {
    font-size: 13px;
    margin-left: 12px;
  }
  #billboard .order {
    width: 20px;
    font-size: 9px;
    text-align: center;
  }
  #billboard td {
    padding: 7px 0;
    border-bottom: 1px solid #eaeaea;
  }
  #billboard .title {
    width: 290px;
  }
  #doulist {
    margin-bottom: 40px;
  }
  #doulist h2 {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 10px;
    color: #111;
  }
  #doulist ul {
    border-top: 1px solid #eee;
  }
  #doulist ul li {
    position: relative;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    zoom: 1;
  }
  #doulist li span {
    font-size: 13px;
    float: right;
    color: #999;
  }
  #doulist .title {
    width: 247px;
  }
  #doulist a {
    font-size: 13px;
  }
</style>
