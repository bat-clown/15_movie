<template>
  <div class="gaia">
    <div class="fliter-wp">
      <h2>
        <div class="activate hotMovie">最近热门电影</div>
        <div class="filter">
          <form action="get" class="gaia_frm" autocomplete="off">
            <div class="tags">
              <div class="tag-list">
                <label-parent v-for="(item,index) in labelList" :item="item" :key="index" :index="index"></label-parent>
              </div>
            </div>
          </form>
        </div>
        <a href="/explore#!type=movie&amp;tag=%E7%83%AD%E9%97%A8" class="more-link">更多»</a>
      </h2>
    </div>
    <div class="list-wp">
      <div class="slider">
        <div class="slide-container" style="height: 426px;">
          <div class="slide-wrapper" :style="{width:width+'px',left:left+'px'}">
            <div class="slide-page" style="width: 700px;" v-for="(list,index) in num" :key="index">
              <a-parent v-for="(item,index) in list" :key="index" :item="item"></a-parent>
            </div>
          </div>

        </div>
        <div class="slide-ctrl ui-slide-control">
          <a class="btn-prev" href="javascript:void(0)" @click="prevClick"></a>
          <i-parent v-for="(dot,indexD) in num" :key="indexD" :message="index" :indexD="indexD" @up="handle"></i-parent>
          <a class="btn-next" href="javascript:void(0)" @click="nextClick"></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
      return {
        movieList: [],
        labelList: ['热门', '最新', '豆瓣高分', '冷门佳片', '华语', '欧美', '韩国', '日本'],
        left: 0,
        index: 0
      }
    },
    computed: {
      num: function () {
        let a = 10;
        let b = this.movieList;
        let c = b.length;
        let d = [];
        while (c >= 10) {
          d.push(b.splice(0, 10));
          c = b.length;
        }
        if (c > 0) {
          d.push(b);
        }
        return d;
      },
      width: function () {
        return this.num.length * 700;
      }
    },
    methods: {
      prevClick(){
        this.left -= 700;
        if (this.left < -700) {
          this.left = 0
        }
        this.index++;
        if (this.index > this.num.length - 1) {
          this.index = 0;
        }
      },
      nextClick(){
        this.left += 700;
        if (this.left > 0) {
          this.left = -700;
        }
        this.index--;
        if (this.index < 0) {
          this.index = this.num.length - 1;
        }
      },
      handle(msg){
        this.index = msg;
        this.left = -700 * msg;
      }
    },
    mounted(){
      this.$http.jsonp("https://api.douban.com/v2/movie/coming_soon").then(function (res) {
        this.movieList = JSON.parse(res.bodyText).subjects;
      }, function (res) {
        this.movieList = res;
      });
    },
    components: {
      'a-parent': {
        template: `
              <a class="item" target="_blank" href="javascript:void(0)">
                <div class="cover-wp">
                  <img :src="item.images.small" :alt="item.title">
                </div>
                <p>{{item.title}}</p>
              </a>`,
        props: ['item']
      },
      'i-parent': {
        template: `
            <i :class="classObject" @click="upload(indexD)"></i>
          `,
        props: ['message', 'indexD'],
        data(){
          return {}
        },
        computed: {
          classObject: function () {
            return {
              dot: 'dot',
              'activate': this.message === this.indexD
            }
          }
        },
        methods: {
          upload(){
            this.$emit('up', this.indexD)
          }
        }

      },
      'label-parent': {
        template: `<label :class="{activate:isActive}">
                      {{item}}
                      <input type="radio" name="tag" :value="item" :checked="checked" >
                    </label>`,
        props: ['item', 'index'],
        data(){
          return {
              isActive:false,
              checked:''
          }
        },
        created() {
          if(this.index === 0){
              this.isActive = true;
              this.checked = 'checked'
          }
        }
      }
    }
  }
</script>

<style>
  .gaia {
    margin-bottom: 40px;
  }

  .gaia .fliter-wp {
    overflow: hidden;
    zoom: 1;
  }

  .gaia h2 {
    font-size: 17px;
  }

  .gaia .fliter-wp h2 {
    overflow: hidden;
    line-height: normal;
    padding-bottom: 12px;
  }

  #content h2 {
    color: #111;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 18px;
  }

  .hotMovie {
    float: left;
    font-size: 16px;
  }

  .gaia .fliter-wp .filter {
    width: 450px;
    margin-left: 14px;
    float: left;
  }

  .gaia .tags {
    position: relative;
    top: 1px;
    overflow: hidden;
    zoom: 1;
  }

  .gaia .tags .tag-list {
    width: auto;
    display: inline;
    padding-right: 5px;
  }

  .gaia .tags label {
    margin: 0;
    margin-right: 12px;
    padding: 0;
    vertical-align: inherit;
    font-size: 13px;
    color: #9b9b9b;
    border-radius: 0;
    display: inline-block;
    zoom: 1;
    cursor: pointer;
  }

  .gaia .tags label:hover {
    color: #fff;
    background: #37a
  }

  .gaia .fliter-wp h2 .activate {
    color: #111;
    background: none;
  }

  .gaia h2 .activate:hover {
    color: #111;
    background: none
  }

  .gaia .tags label input {
    display: none;
  }

  .gaia .fliter-wp .more-link {
    font-size: 13px;
    float: right;
    position: relative;
    top: 2px;
  }

  .gaia .list-wp {
    width: 675px;
    overflow: hidden;
    margin-right: -10px;
  }

  .gaia .slider .slide-container {
    overflow: hidden;
    position: relative;
  }

  .gaia .slider .slide-container .slide-wrapper {
    position: absolute;
    top: 0;
  }

  .gaia .slider .slide-container .slide-wrapper .slide-page {
    float: left;
  }

  .gaia .item {
    display: block;
    float: left;
    color: #37a;
    font-size: 13px;
    text-align: center;
    margin: 0 25px 10px 0;
    width: 115px;
  }

  .gaia .item:link, .gaia .item:visited, .gaia .item:hover, .gaia .item:active {
    background: none;
    color: #37a;
  }

  .gaia .item .cover-wp {
    background-size: 100%;
    height: 161px;
    overflow: hidden;
  }

  .gaia .item .cover-wp img {
    width: 115px;
  }

  .gaia .item p {
    margin: 5px 0 0;
    height: 44px;
    overflow: hidden;
  }

  .gaia .item strong {
    color: #e09015;
  }

  .ui-slide-control a {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    cursor: pointer;
    background: url("../../../static/imgs/slide.png") no-repeat;
  }

  .gaia .slider .slide-ctrl {
    text-align: center;
    margin: 0 0 13px;
    float: none;
  }

  .ui-slide-control .btn-prev {
    background-position: 0 0;
  }

  .ui-slide-control .btn-next {
    background-position: -18px 0;
  }

  .gaia .slider .slide-ctrl .btn-next {
    margin-left: 5px;
    margin-right: 0;
  }

  .gaia .slider .slide-ctrl .btn-prev {
    margin-right: 10px;
  }

  .gaia .slider .slide-ctrl .dot {
    width: 6px;
    height: 6px;
    background-color: #D8D8D8;
    border-radius: 50%;
    position: relative;
    top: -5px;
    margin-right: 5px;
    display: inline-block;
    float: none;
    cursor: pointer;
  }

  .gaia .slider .slide-ctrl .dot.activate {
    background-color: #6198D7;
  }


</style>
