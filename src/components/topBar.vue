<template>
  <div id="db-global-nav" class="global-nav">
    <div class="bd">

      <div class="top-nav-info">
        <ul>
          <li>
            <a id="top-nav-doumail-link" href="https://www.douban.com/doumail/">豆邮</a>
          </li>
          <li class="nav-user-account">
            <a target="_blank" href="https://www.douban.com/accounts/" class="bn-more" rel="off">
              <span>fang7758258的帐号</span><span class="arrow"></span>
            </a>
            <div class="more-items">
              <table cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                  <td>
                    <a href="https://www.douban.com/mine/">个人主页</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a target="_blank" href="https://www.douban.com/mine/orders/">我的订单</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a target="_blank" href="https://www.douban.com/mine/wallet/">我的钱包</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a target="_blank" href="https://www.douban.com/accounts/">帐号管理</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.douban.com/accounts/logout?source=movie&amp;ck=ni2e">退出</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>

      <div class="top-nav-reminder">
        <a href="https://www.douban.com/notification/" class="lnk-remind">提醒</a>
        <div id="top-nav-notimenu" class="more-items">
          <div class="bd">
            <p>加载中...</p>
          </div>
        </div>
      </div>


      <div class="top-nav-doubanapp">
        <a href="https://www.douban.com/doubanapp/app?channel=top-nav" class="lnk-doubanapp">下载豆瓣客户端</a>
        <div id="top-nav-appintro" class="more-items">
          <p class="appintro-title">豆瓣</p>
          <p class="slogan">我们的精神角落</p>
          <p class="qrcode">扫码直接下载</p>
          <div class="download">
            <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&amp;direct_dl=1&amp;download=iOS">iPhone</a>
            <span>·</span>
            <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&amp;direct_dl=1&amp;download=Android" class="download-android">Android</a>
          </div>
          <div id="doubanapp-tip" style="display: none;">
            <a href="https://www.douban.com/doubanapp/app?channel=qipao" class="tip-link">豆瓣 5.0 全新发布</a>
            <a href="javascript: void 0;" class="tip-close">×</a>
          </div>
        </div>
      </div>




      <div class="global-nav-items">
        <ul>
          <li class="">
            <a href="https://www.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-main&quot;,&quot;uid&quot;:&quot;173739445&quot;}">豆瓣</a>
          </li>
          <li class="">
            <a href="https://book.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-book&quot;,&quot;uid&quot;:&quot;173739445&quot;}">读书</a>
          </li>
          <li class="on">
            <a href="https://movie.douban.com" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-movie&quot;,&quot;uid&quot;:&quot;173739445&quot;}">电影</a>
          </li>
          <li class="">
            <a href="https://music.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-music&quot;,&quot;uid&quot;:&quot;173739445&quot;}">音乐</a>
          </li>
          <li class="">
            <a href="https://www.douban.com/location" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-location&quot;,&quot;uid&quot;:&quot;173739445&quot;}">同城</a>
          </li>
          <li class="">
            <a href="https://www.douban.com/group" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-group&quot;,&quot;uid&quot;:&quot;173739445&quot;}">小组</a>
          </li>
          <li class="">
            <a href="https://read.douban.com/?dcs=top-nav&amp;dcm=douban" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-read&quot;,&quot;uid&quot;:&quot;173739445&quot;}">阅读</a>
          </li>
          <li class="">
            <a href="https://douban.fm/?from_=shire_top_nav" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-fm&quot;,&quot;uid&quot;:&quot;173739445&quot;}">FM</a>
          </li>
          <li class="">
            <a href="https://time.douban.com/?dt_time_source=douban-web_top_nav" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-time&quot;,&quot;uid&quot;:&quot;173739445&quot;}">时间</a>
          </li>
          <li class="">
            <a href="https://market.douban.com/?utm_campaign=douban_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-market&quot;,&quot;uid&quot;:&quot;173739445&quot;}">市集</a>
          </li>
          <li>
            <a href="#more" class="bn-more"><span>更多</span></a>
            <div class="more-items">
              <table cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                  <td>
                    <a href="https://ypy.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-ypy&quot;,&quot;uid&quot;:&quot;173739445&quot;}">豆瓣摄影</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default{

  }
</script>


<style></style>
