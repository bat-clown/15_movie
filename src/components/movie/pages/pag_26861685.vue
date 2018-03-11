<template>
  <div id="wrapper">
    <div id="content">
      <h1>
        <span>{{movie.title}}</span>
        <span class="year">({{movie.year}})</span>
      </h1>
      <div class="grid-16-8 clearfix">
        <div class="article">
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
                <a href="javascript:void(0)" :title="item.name" class="">
                  <img class="avatar" :src="item.avatars.small" :alt="item.name">
                </a>
                <div class="info">
                  <span class="name"><a href="javascript:void(0)" :title="item.name " class="name">{{item.name}} </a></span>
                  <span class="role" title="导演">导演</span>
                </div>
              </li>

              <li class="celebrity" v-for="(item,index) in movie.casts" :key="item.name">
                <a href="javascript:void(0)" :title="item.name" class="">
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
              <i class="">黑豹的视频和图片</i>
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
          <!--<section class="reviews mod movie-content">-->
            <!--<header>-->
              <!--<a href="new_review" rel="nofollow" class="create-review comment_btn" data-isverify="True"-->
                 <!--data-verify-url="https://www.douban.com/accounts/phone/verify?redir=http://movie.douban.com/subject/6390825/new_review">-->
                <!--<span>我要写影评</span>-->
              <!--</a>-->
              <!--<h2>-->
                <!--黑豹的影评 · · · · · ·-->
                <!--<span class="pl">( <a href="reviews">全部 159 条</a> )</span>-->
              <!--</h2>-->
            <!--</header>-->

            <!--<div class="review_filter">-->
              <!--<a href="javascript:;;" class="cur" data-sort="">热门</a> /-->
              <!--<a href="javascript:;;" data-sort="time">最新</a> /-->
              <!--<a href="javascript:;;" data-sort="follow">好友</a>-->

            <!--</div>-->


            <!--<div class="review-list  ">-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9167335">-->
                <!--<div class="main review-item" id="9167335">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/ztftom/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u3206680-10.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/ztftom/" property="v:reviewer" class="name">Vamei</a>-->

                    <!--<span property="v:rating" class="allstar20 main-title-rating" title="较差"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-02-20" class="main-meta">2018-02-20 16:20:43</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9167335/">希望《黑豹》能重编</a></h2>-->

                    <!--<div id="review_9167335_short" class="review-short" data-rid="9167335">-->
                      <!--<div class="short-content">-->

                        <!--之前对黑豹还是充满期望。以一个国家之力来支撑的超级英雄，应该不会比钢铁侠的排场差。但看过《黑豹》电影之后，确实有些失望。这种失望部分来自于电影的场景。最后的一场大战看起来像是部落战争。明明拥有黑科技，可武士只能拿刀枪剑戟奔跑着对劈。反派能倚靠的最强武力就只...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9167335-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9167335_full" class="hidden">-->
                      <!--<div id="review_9167335_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9167335" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9167335">-->
                                <!--272-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9167335" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9167335">-->
                                <!--77-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9167335/#comments" class="reply">51回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9195144">-->
                <!--<div class="main review-item" id="9195144">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/152799682/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u152799682-12.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/152799682/" property="v:reviewer" class="name">时影</a>-->


                    <!--<span property="v:dtreviewed" content="2018-03-02" class="main-meta">2018-03-02 16:44:41</span>-->

                    <!--<a class="rel-topic" target="_blank" href="//www.douban.com/gallery/topic/看《黑豹》前需要了解哪些背景知识？">#看《黑豹》前需要了解哪些背景知识？</a>-->

                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9195144/">《黑豹》观影完全指南</a></h2>-->

                    <!--<div id="review_9195144_short" class="review-short" data-rid="9195144">-->
                      <!--<div class="short-content">-->

                        <!--本篇文章旨在让大家更深入的了解《黑豹》这部电影。 全文共分为四个篇章，分别为起源篇、人物篇、回顾篇以及彩蛋and幕后篇。 字数达4000左右，阅读需要8～10分钟。 1.起源篇 瓦坎达（Wakanda）是美国漫威漫画中虚构的国家，位于非洲的东北部。 其政治体制为君主专制，居民主要...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9195144-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9195144_full" class="hidden">-->
                      <!--<div id="review_9195144_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9195144" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9195144">-->
                                <!--128-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9195144" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9195144">-->
                                <!--15-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9195144/#comments" class="reply">0回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9208444">-->
                <!--<div class="main review-item" id="9208444">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/crankysophia/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u35510811-184.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/crankysophia/" property="v:reviewer" class="name">Syg❤️ZS</a>-->

                    <!--<span property="v:rating" class="allstar30 main-title-rating" title="还行"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-03-07" class="main-meta">2018-03-07 21:46:29</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9208444/">宇宙第一的制片公司</a></h2>-->

                    <!--<div id="review_9208444_short" class="review-short" data-rid="9208444">-->
                      <!--<div class="short-content">-->

                        <!--你无需同意我的观点，但先让我真诚地说一句—— 男反好他妈英俊帅气让人心疼又想污啊 男反好他妈英俊帅气让人心疼又想污啊 男反好他妈英俊帅气让人心疼又想污啊 以及瓦坎达所有的问题明明可以在男主见到弟弟的那一刻解决！男主只要冲上去抱住弟弟哭唧唧“堂弟我爸爸对不起你现...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9208444-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9208444_full" class="hidden">-->
                      <!--<div id="review_9208444_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9208444" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9208444">-->
                                <!--55-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9208444" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9208444">-->
                                <!--13-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9208444/#comments" class="reply">5回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9162423">-->
                <!--<div class="main review-item" id="9162423">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/161575552/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img1.doubanio.com/icon/user_normal.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/161575552/" property="v:reviewer" class="name">施路</a>-->

                    <!--<span property="v:rating" class="allstar30 main-title-rating" title="还行"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-02-18" class="main-meta">2018-02-18 22:17:15</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9162423/">披着平等外衣的黑人英雄</a></h2>-->

                    <!--<div id="review_9162423_short" class="review-short" data-rid="9162423">-->
                      <!--<div class="short-content">-->
                        <!--<p class="spoiler-tip">这篇影评可能有剧透</p>-->

                        <!--Marvel 近年横掃商業電影市場已是不爭的事實。在白人主導的意識形態下，超級英雄一般都由西方白人擔任，其他有色人種只能是奸角或sidekick。Marvel 的商業計算之高，已到算無遺策的境界，當今世上能成功拍攝以黑人為主角的超級英雄電影之製作公司，非Marvel 莫屬。因此，可以預...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9162423-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9162423_full" class="hidden">-->
                      <!--<div id="review_9162423_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9162423" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9162423">-->
                                <!--75-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9162423" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9162423">-->
                                <!--34-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9162423/#comments" class="reply">14回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9207500">-->
                <!--<div class="main review-item" id="9207500">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/140457119/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u140457119-3.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/140457119/" property="v:reviewer" class="name">会飞的猫</a>-->

                    <!--<span property="v:rating" class="allstar30 main-title-rating" title="还行"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-03-07" class="main-meta">2018-03-07 13:31:31</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9207500/">原始社会披着高科技的外衣</a></h2>-->

                    <!--<div id="review_9207500_short" class="review-short" data-rid="9207500">-->
                      <!--<div class="short-content">-->

                        <!--漫威最独具一格的超英电影，但迪士尼近几部作品都不可避免露出在第一第二幕上的短板，作为起源电影，故事层面上确实已经没什么新意了，对于影片表达出来的东西并不能感同身受，动作场面一般般，剧情老土，除了音乐可以外，动作场面很糊，给人一种演员都没底子要通过切镜头弄过...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9207500-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9207500_full" class="hidden">-->
                      <!--<div id="review_9207500_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9207500" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9207500">-->
                                <!--43-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9207500" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9207500">-->
                                <!--7-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9207500/#comments" class="reply">1回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9183301">-->
                <!--<div class="main review-item" id="9183301">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/1402913/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u1402913-10.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/1402913/" property="v:reviewer" class="name">大聪看电影</a>-->

                    <!--<span property="v:rating" class="allstar40 main-title-rating" title="推荐"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-02-25" class="main-meta">2018-02-25 19:29:57</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9183301/">看《黑豹》前，知道这些秘密能让你爆得更稳</a></h2>-->

                    <!--<div id="review_9183301_short" class="review-short" data-rid="9183301">-->
                      <!--<div class="short-content">-->

                        <!--2018漫威开春第一炮的《黑豹》，在短短一周多就已经拿下了各种票房和口碑记录。 比如： *超级英雄电影历史预售票房最高 *单日票房最高 *黑人导演电影票房最高 *四天上映票房超过《正义联盟》 这些记录都是冰山一角，不多陈述，重要的是《黑豹》评分刚解禁，烂番茄的番茄指数就...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9183301-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9183301_full" class="hidden">-->
                      <!--<div id="review_9183301_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9183301" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9183301">-->
                                <!--74-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9183301" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9183301">-->
                                <!--37-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9183301/#comments" class="reply">10回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9176710">-->
                <!--<div class="main review-item" id="9176710">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/147858764/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u147858764-3.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/147858764/" property="v:reviewer" class="name">翻的走开</a>-->

                    <!--<span property="v:rating" class="allstar30 main-title-rating" title="还行"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-02-23" class="main-meta">2018-02-23 15:30:55</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9176710/">还可以吧！</a></h2>-->

                    <!--<div id="review_9176710_short" class="review-short" data-rid="9176710">-->
                      <!--<div class="short-content">-->

                        <!--老国王太保守，想守着瓦坎达不被外界发现，王子上台后逍遥了几天被打败赶下台，新国王太激进，想用瓦坎达技术征服世界，王子上演了一出复仇记，重新登上王位，决定和向世界开放交流瓦坎达技术。从极右到极左，再到政治正确，就是这么一个故事！我觉得不会大爆的原因…不是文化...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9176710-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9176710_full" class="hidden">-->
                      <!--<div id="review_9176710_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9176710" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9176710">-->
                                <!--45-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9176710" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9176710">-->
                                <!--13-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9176710/#comments" class="reply">0回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9208616">-->
                <!--<div class="main review-item" id="9208616">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/173448623/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u173448623-3.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/173448623/" property="v:reviewer" class="name">看透娱乐圈</a>-->

                    <!--<span property="v:rating" class="allstar30 main-title-rating" title="还行"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-03-07" class="main-meta">2018-03-07 22:38:33</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9208616/">漫威迷一定要看的电影</a></h2>-->

                    <!--<div id="review_9208616_short" class="review-short" data-rid="9208616">-->
                      <!--<div class="short-content">-->
                        <!--<p class="spoiler-tip">这篇影评可能有剧透</p>-->

                        <!--这是一部非常不错的漫威作品，视觉效果超震撼，幻想的未来是蛮美好的，居然有一个这么美丽，科技如此发达的非洲国家，最后正义的力量是最伟大的，总将战胜邪恶。承接美国队长3中瓦干达国王被炸飞，太子成为新国王，解释了巩合金的出现，也解释了国王强大身体的来源，然后内战，...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9208616-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9208616_full" class="hidden">-->
                      <!--<div id="review_9208616_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9208616" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9208616">-->
                                <!--42-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9208616" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9208616">-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9208616/#comments" class="reply">2回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9166227">-->
                <!--<div class="main review-item" id="9166227">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/wcngsjb/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u26008268-10.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/wcngsjb/" property="v:reviewer" class="name">欧富贵&amp;LOL</a>-->

                    <!--<span property="v:rating" class="allstar30 main-title-rating" title="还行"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-02-20" class="main-meta">2018-02-20 03:48:45</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9166227/">不是政治正确的问题，是假大空的问题</a></h2>-->

                    <!--<div id="review_9166227_short" class="review-short" data-rid="9166227">-->
                      <!--<div class="short-content">-->

                        <!--20180223 update  评分从两星跳三星，主要原因看下面评论，懒得复述。  至于为啥还是三星是我【主观】觉得它【在我心目中】确实只是一部三星电影，至于你喜欢你打五星，I'm happy for you，let's just agree to disagree. :)  原评论不改主要原因是表示自己的错误出在哪里。再...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9166227-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9166227_full" class="hidden">-->
                      <!--<div id="review_9166227_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9166227" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9166227">-->
                                <!--85-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9166227" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9166227">-->
                                <!--54-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9166227/#comments" class="reply">27回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="9190427">-->
                <!--<div class="main review-item" id="9190427">-->


                  <!--<header class="main-hd">-->
                    <!--<a href="https://www.douban.com/people/lingrui1995/" class="avator">-->
                      <!--<img width="24" height="24" src="https://img3.doubanio.com/icon/u63688511-15.jpg">-->
                    <!--</a>-->

                    <!--<a href="https://www.douban.com/people/lingrui1995/" property="v:reviewer" class="name">凌睿</a>-->

                    <!--<span property="v:rating" class="allstar40 main-title-rating" title="推荐"></span>-->

                    <!--<span property="v:dtreviewed" content="2018-02-28" class="main-meta">2018-02-28 17:37:53</span>-->


                  <!--</header>-->


                  <!--<div class="main-bd">-->

                    <!--<h2><a href="https://movie.douban.com/review/9190427/">我要急支糖浆</a></h2>-->

                    <!--<div id="review_9190427_short" class="review-short" data-rid="9190427">-->
                      <!--<div class="short-content">-->
                        <!--<p class="spoiler-tip">这篇影评可能有剧透</p>-->

                        <!--作为漫威史上最佳，哦不，漫威史上最“黑”的电影，这是一个“黑人黑夜穿黑衣扒黑车下黑手”的故事。 几百万年以前，一颗由金坷垃构成的陨石从天而降，落在非洲大地上。 后来，五个部落在金坷垃上定居，合称“瓦坎达”。 其中有个部落的成员嘴里都有个盘子，估计是吃自助餐的时...-->

                        <!--&nbsp;(<a href="javascript:;" id="toggle-9190427-copy" class="unfold" title="展开">展开</a>)-->
                      <!--</div>-->
                    <!--</div>-->

                    <!--<div id="review_9190427_full" class="hidden">-->
                      <!--<div id="review_9190427_full_content" class="full-content"></div>-->
                    <!--</div>-->

                    <!--<div class="action">-->
                      <!--<a href="javascript:;;" class="action-btn up" data-rid="9190427" title="有用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">-->
                        <!--<span id="r-useful_count-9190427">-->
                                <!--68-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="javascript:;;" class="action-btn down" data-rid="9190427" title="没用">-->
                        <!--<img-->
                          <!--src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">-->
                        <!--<span id="r-useless_count-9190427">-->
                                <!--27-->
                        <!--</span>-->
                      <!--</a>-->
                      <!--<a href="https://movie.douban.com/review/9190427/#comments" class="reply">18回应</a>-->

                      <!--<a href="javascript:;;" class="fold hidden">收起</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->


            <!--</div>-->


            <!--<p class="pl">-->
              <!--&gt;-->
              <!--<a href="reviews">-->
                <!--更多影评159篇-->
              <!--</a>-->
            <!--</p>-->
          <!--</section>-->
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              movie:{},
              noData:'豆瓣不给我',
              isShow:true,
              num:''
          }
      },
      created(){
        this.num = this.$route.params.id;
        this.$http.jsonp("https://api.douban.com/v2/movie/subject/"+this.num).then(function(res){
          this.movie = res.body;
          console.log(this.list);
        },function(res){
          this.movie = res;
        });
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
    background: url("../../../../static/imgs/big_star.png") no-repeat;
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
