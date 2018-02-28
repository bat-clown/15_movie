<template>
  <div id="db-nav-movie" class="nav">
    <div class="nav-wrap">
      <div class="nav-primary">
        <div class="nav-logo">
          <a href="https://movie.douban.com">豆瓣电影</a>
        </div>
        <div class="nav-search">
          <form action="https://movie.douban.com/subject_search" method="get">
            <fieldset>
              <legend>搜索：</legend>
              <label for="inp-query">
              </label>
              <div class="inp"><input id="inp-query" name="search_text" size="22" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" value="" autocomplete="off"></div>
              <div class="inp-btn"><input type="submit" value="搜索"></div>
              <input type="hidden" name="cat" value="1002">
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <div class="nav-secondary">


      <div class="nav-items">
        <ul>
          <li><a href="https://movie.douban.com/mine">我看</a>
          </li>
          <li><a href="https://movie.douban.com/cinema/nowplaying/">影讯&amp;购票</a>
          </li>
          <li><a href="https://movie.douban.com/explore">选电影</a>
          </li>
          <li><a href="https://movie.douban.com/tv/">电视剧</a>
          </li>
          <li><a href="https://movie.douban.com/chart">排行榜</a>
          </li>
          <li><a href="https://movie.douban.com/tag/">分类</a>
          </li>
          <li><a href="https://movie.douban.com/review/best/">影评</a>
          </li>
          <li><a href="https://movie.douban.com/annual/2017?source=navigation">2017年度榜单</a>
          </li>
          <li><a href="https://movie.douban.com/standbyme/2017?source=navigation">2017观影报告</a>
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
