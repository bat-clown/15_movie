<template>
  <div id="wrapper">
    <div id="content">
      <h1>
        <span>{{movie.title}}</span>
        <span class="year">{{movie.year}}</span>
      </h1>
      <div class="grid-16-8 clearfix">
        <div class="article clearfix">
          <div class="indent clearfix">
            <div class="subjectwrap clearfix">
              <div class="subject clearfix">
                <div id="mainpic" class="">
                  <a class="nbgnbg" href="javascript:void(0)" title="点击看更多海报">
                    <img :src="movie.images.small"
                         :alt="movie.title">
                  </a>
                </div>
                <div id="info">
                  <span>
                    <span class="pl">导演</span>:
                    <span class="attrs" v-for="(item,index) in movie.directors" :key="index">
                      <a href="javascript:void(0)">{{item.name}}</a>
                    </span>
                  </span><br>
                  <span><span class="pl">编剧</span>:
                    <span class="attrs" v-for="(item,index) in movie.writers" :key="index">
                      <a href="javascript:void(0)">{{item}}</a>
                      {{index < (movie.writers.length-1) ? '/' : ''}}
                    </span>
                    <span v-if="!movie.writers">
                      <a href="javascript:void(0)">{{noData}}</a>
                    </span>
                  </span><br>
                  <span class="actor"><span class="pl">主演</span>:
                    <span class="attrs">
                      <span v-for="(item,index) in movie.casts" :key="index">
                        <a href="javascript:void(0)">{{item.name}}</a>
                        {{index < (movie.casts.length-1) ? '/' : ''}}
                      </span>
                      <a href="javascript:;" title="更多主演" v-if="isShow" @click="he">更多...</a>
                      <a href="javascript:void(0)" v-else>{{noData}}</a>
                    </span>
                  </span>
                  <br>

                  <span class="pl">类型:
                    <span v-for="(item,index) in movie.genres" :key="index">
                      {{item}} {{index < (movie.genres.length-1) ? '/' : ''}}
                    </span>
                  </span>
                  <br>
                  <span class="pl">制片国家/地区:
                    <span v-for="(item_c,index_c) in movie.countries" :key="index_c">
                      {{item_c}} {{index_c < (movie.countries.length-1) ? '/' : ''}}
                    </span>
                  </span>
                  <br>
                  <span class="pl">语言:</span> {{!!(movie.languages)?movie.languages:noData}}<br>
                  <span class="pl">上映日期:
                    <span v-for="(item,index) in movie.mainland_pubdate" :key="index">{{item}} {{index_c < (movie.mainland_pubdate.length-1) ? '/' : ''}} </span>
                    <span v-if="!(movie.mainland_pubdate)">{{noData}}</span>
                  </span>
                  <br>
                  <span class="pl">片长:</span> <span>{{movie.durations ? movie.durations : noData}}</span><br>
                  <span class="pl">原名: </span>{{movie.original_title}}<br>
                  <span class="pl">又名:
                    <span v-for="(item,index) in movie.aka" :key="index">
                      {{item}} {{index < (movie.aka.length-1) ? '/' : ''}}
                    </span>
                  </span><br>
                </div>
              </div>

              <div id="interest_sectl">
                <div class="rating_wrap clearbox">
                  <div class="clearfix">
                    <div class="rating_logo ll">
                      豆瓣评分
                    </div>
                  </div>
                  <div class="rating_self clearfix">
                    <strong class="ll rating_num">{{movie.rating.average}}</strong>
                    <span :content="movie.rating.max"></span>
                    <div class="rating_right ">
                      <div class="ll bigstar" :class="'bigstar' + movie.rating.stars"></div>
                      <div class="rating_sum">
                        <a href="javascript:void(0)" class="rating_people"><span>{{movie.ratings_count}}</span>人评价</a>
                      </div>
                    </div>
                  </div>
                  <div class="ratings-on-weight">
                    <div class="item">
                      <span class="stars5 starstop" title="力荐">
                          5星
                      </span>
                      <div class="power" style="width:64px"></div>
                      <span class="rating_per">42.8%</span>
                      <br>
                    </div>
                    <div class="item">
                      <span class="stars4 starstop" title="推荐">
                          4星
                      </span>
                      <div class="power" style="width:61px"></div>
                      <span class="rating_per">40.9%</span>
                      <br>
                    </div>
                    <div class="item">
                      <span class="stars3 starstop" title="还行">
                          3星
                      </span>
                      <div class="power" style="width:20px"></div>
                      <span class="rating_per">13.6%</span>
                      <br>
                    </div>
                    <div class="item">
                      <span class="stars2 starstop" title="较差">
                          2星
                      </span>
                      <div class="power" style="width:2px"></div>
                      <span class="rating_per">1.9%</span>
                      <br>
                    </div>
                    <div class="item">
                      <span class="stars1 starstop" title="很差">
                          1星
                      </span>
                      <div class="power" style="width:1px"></div>
                      <span class="rating_per">0.8%</span>
                      <br>
                    </div>
                  </div>
                </div>
                <div class="rating_betterthan">
                  "好于"<a href="javascript:void(0)"></a><br>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="related-info">
            <h2>
              <i class="">{{movie.title}}的剧情简介</i>
              · · · · · ·
            </h2>
            <div class="indent">
              <p class="text_indent">
                {{movie.summary}}
              </p>
            </div>
          </div>
          <div id="celebrities" class="celebrities related-celebrities">
            <h2>
              <i class="">{{movie.title}}的影人</i>
              · · · · · ·
              <span class="pl">
            (
                <a href="javascript:void(0)">全部 25</a>
            ) </span>
            </h2>

            <ul class="celebrities-list from-subject __oneline">
              <li class="celebrity" v-for="(item,index) in movie.directors" :key="item.name">
                <a :href="item.avatars.small" :title="item.name" class="">
                  <img class="avatar" :src="item.avatars.small" :alt="item.name">
                </a>
                <div class="info">
                  <span class="name"><a href="javascript:void(0)" :title="item.name " class="name">{{item.name}} </a></span>
                  <span class="role" title="导演">导演</span>
                </div>
              </li>

              <li class="celebrity" v-for="(item,index) in movie.casts" :key="item.name">
                <a :href="item.avatars.small" :title="item.name" class="">
                  <img class="avatar" :src="item.avatars.small" :alt="item.name">
                </a>
                <div class="info">
                  <span class="name"><a href="javascript:void(0)" :title="item.name " class="name">{{item.name}} </a></span>
                  <span class="role" title="演员">演员</span>
                </div>
              </li>
            </ul>
          </div>


          <div id="author-wrapper" class="author-wrapper"></div>


          <div id="related-pic" class="related-pic">

            <h2>
              <i class="">{{movie.title}}的视频和图片</i>
              · · · · · ·
            </h2>

            <ul class="related-pic-bd" v-if="false">
              <li>
                <a class="related-pic-video" href="https://movie.douban.com/trailer/226827/#content">
                  <span></span>
                  <img src="https://img3.doubanio.com/img/trailer/medium/2515715320.jpg?1520505787" alt="预告片">
                </a>
              </li>
              <li>
                <a href="https://movie.douban.com/photos/photo/2493318100/"><img
                  src="https://img3.doubanio.com/view/photo/sqxs/public/p2493318100.webp" alt="图片"></a>
              </li>
            </ul>
            <p v-else>{{noData}}</p>
          </div>


          <div id="comments-section" v-if=false>
            <div class="mod-hd">

              <a class="comment_btn j a_collect_btn" name="cbtn-6390825" href="javascript:;" rel="nofollow">
                <span>我要写短评</span>
              </a>


              <h2>
                <i class="">黑豹的短评</i>
                · · · · · ·
                <span class="pl">
            (
                <a href="https://movie.douban.com/subject/6390825/comments?status=P">全部 4488 条</a>
            ) </span>
              </h2>

            </div>
            <div class="mod-bd">

              <div class="tab-hd">
                <a id="hot-comments-tab" href="comments" data-id="hot" class="on">热门</a>&nbsp;/&nbsp;
                <a id="new-comments-tab" href="comments?sort=time" data-id="new">最新</a>&nbsp;/&nbsp;
                <a id="following-comments-tab" href="follows_comments" data-id="following">好友</a>
              </div>

              <div class="tab-bd">
                <div id="hot-comments" class="tab">


                  <div class="comment-item" data-cid="1325255089">


                    <div class="comment">
                      <h3>
            <span class="comment-vote">
                <span class="votes">259</span>
                <input value="1325255089" type="hidden">
                <a href="javascript:;" class="j a_vote_comment" onclick="">有用</a>
            </span>
                        <span class="comment-info">
                <a href="https://www.douban.com/people/147398272/" class="">蜜饯大王橄榄梅</a>
                    <span>看过</span>
                    <span class="allstar50 rating" title="力荐"></span>
                <span class="comment-time " title="2018-02-17 04:40:15">
                    2018-02-17
                </span>
            </span>
                      </h3>
                      <p class="">
                        怒打五星。个人觉得四星，有笑点，女性角色都很棒，strong and powerful。但是豆瓣上傻逼也忒多了点吧，黑人演员多一个个就高潮迭起除了政治正确还他妈知道其它词吗？而且就你们这帮人也配谈政治正确？
                      </p>
                      <a class="js-irrelevant irrelevant" href="javascript:;">这条短评跟影片无关</a>
                    </div>

                  </div>


                  > <a href="comments?sort=new_score&amp;status=P">更多短评4488条</a>
                </div>
                <div id="new-comments" class="tab">
                  <div id="normal">
                  </div>
                  <div class="fold-hd hide">
                    <a class="qa" href="/help/opinion#t2-q0" target="_blank">为什么被折叠？</a>
                    <a class="btn-unfold" href="#">有一些短评被折叠了</a>
                    <div class="qa-tip">
                      评论被折叠，是因为发布这条评论的帐号行为异常。评论仍可以被展开阅读，对发布人的账号不造成其他影响。如果认为有问题，可以<a
                      href="https://help.douban.com/help/ask?category=movie">联系</a>豆瓣电影。
                    </div>
                  </div>
                  <div class="fold-bd">
                  </div>
                  <span id="total-num"></span>
                </div>
                <div id="following-comments" class="tab">


                  <div class="comment-item">
                    你关注的人还没写过短评
                  </div>

                </div>
              </div>


            </div>
          </div>
          <div v-else>
            {{noData}}
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  export default{
      data(){
          return {
              noData:'豆瓣不给我',
              isShow:true,
              num:''
          }
      },
      computed:{
          movie: function () {
              return this.$store.getters.movingDetails
          }
      },
      mounted(){
        let id = this.$route.query.id
        this.$store.commit('IDCLICK',{id})
        this.$store.dispatch('getDetails')
        console.log(this.$store.getters.movingDetails);
      },
    methods:{
          he(){
              this.isShow = !this.isShow;
          }
    }
  }
</script>

<style>
  h1 .year {
    color: #888;
  }
  .subjectwrap {
    position: relative;
    float: none;
    width: auto;
    margin-bottom: 15px;
  }

  .subject {
    width: 500px;
  }

  #mainpic {
    float: left;
    text-align: center;
    margin-right: 15px;
    max-width: 155px;
    overflow: hidden;
  }

  #mainpic a img {
    margin-bottom: 7px;
    max-width: 145px;
    margin-top: 3px;
  }

  #info {
    max-width: 333px;
    float: left;
    word-wrap: break-word;
  }

  .pl {
    font: 12px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
  }

  .pl span{
    color: #111;
  }

  #interest_sectl {
    float: left;
    width: 155px;
    margin: 2px 0 0 0;
    padding: 0 0 0 15px;
    border-left: 1px solid #eaeaea;
    color: #9b9b9b;
  }

  #interest_sectl .rating_wrap {
    padding-bottom: 15px;
    font-size: 12px;
    line-height: 14px;
  }

  .clearbox {
    clear: both;
    width: 100%;
  }

  #interest_sectl .rating_wrap .rating_logo {
    line-height: 1;
  }

  .ll {
    float: left;
  }

  #interest_sectl .rating_self {
    padding: 0;
    line-height: 2;
  }

  #interest_sectl .rating_num {
    color: #494949;
    padding: 0;
    min-width: 30%;
    font-size: 28px;
  }

  #interest_sectl .rating_right {
    float: left;
    padding: 10px 0 10px 6px;
  }

  .bigstar45 {
    background: url("../../../static/imgs/big_star.png") no-repeat;
    display: inline-block;
    zoom: 1;
    width: 75px;
    height: 15px;
    margin: 1px 0 0 0;
    overflow: hidden;
  }

  .starstop {
    float: left;
    margin-right: 5px;
  }

  #interest_sectl .power {
    height: 10px;
    float: left;
    margin: 1px 4px;
    background: #ffd596 none repeat scroll 0 0;
  }
  .grid-16-8 {
    width: 675px;
  }
  #interest_sectl .rating_per {
    font-size: 11px;
  }

  #interest_sectl .rating_betterthan {
    position: relative;
    padding: 15px 0;
    border-top: 1px solid #eaeaea;
    color: #9b9b9b;
    margin: 0;
  }
  #content .related-info h2, #content .celebrities h2{
    color: #072;
    border:none;
    padding:0;
    margin-bottom: 12px;
  }
  .related-info{
    margin-bottom: 40px;
  }
  .related-info h2 {
    margin: 24px 0 12px 0;
  }
  #content .text_indent{
    text-indent: 2em;
  }
  #celebrities{
    margin-top: 30px;
  }
  #celebrities .celebrities-list{
    display: flex;
    justify-content: space-between;
  }
  #celebrities .celebrities-list li {
    display: inline-block;
    vertical-align: top;
    width: 95px;
    font-size: 13px;
  }
  #celebrities * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #celebrities .celebrities-list.from-subject .avatar {
    margin-left: 0;
  }
  #celebrities .celebrities-list .avatar {
    margin: 0 auto;
    height: 133px;
  }
  #celebrities .celebrities-list li .info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 6px auto 0;
    display: block;
    text-align: center;
  }
  #celebrities .celebrities-list .info span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    width: 95px;
    color: #9b9b9b;
  }
  .author-wrapper {
    margin-bottom: 40px;
  }
</style>
