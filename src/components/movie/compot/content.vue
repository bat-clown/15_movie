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
        <div id="footer">
          <div class="footer-extra"></div>
          <span id="icp" class="fleft gray-link">
              © 2005－2018 douban.com, all rights reserved 北京豆网科技有限公司
          </span>
          <span class="fright">
            <a href="https://www.douban.com/about">关于豆瓣</a>
          · <a href="https://www.douban.com/jobs">在豆瓣工作</a>
          · <a href="https://www.douban.com/about?topic=contactus">联系我们</a>
          · <a href="https://www.douban.com/about?policy=disclaimer">免责声明</a>

          · <a href="https://help.douban.com/?app=movie" target="_blank">帮助中心</a>
          · <a href="https://www.douban.com/doubanapp/">移动应用</a>
          · <a href="https://www.douban.com/partner/">豆瓣广告</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import hot from './content/hot.vue';
import recent from './content/recent.vue'
import right from './content/right.vue'
  export default{
    components:{
      'hot':hot,
      'recent':recent,
      'right':right
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
  #footer {
    color: #999;
    padding: 6px 0;
    margin-top: 40px;
    overflow: hidden;
    zoom: 1;
    border-top: 1px dashed #ddd;
  }
  .fleft {
    float: left;
  }
</style>
