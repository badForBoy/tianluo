<template>
  <div class="news">
    <div class="banner-bg">
      <img src="./home_banner.png" alt="">
    </div>
    <div class="item1">
      <div class="content clearfix">
        <div class="item-left">
          <h3>新闻中心</h3>
          <ul>
            <li
              v-for="(item, index) in list"
              @click="select(item, list)"
              :class="{'active': item.active}"
              :key="index">
              <span class="icon"></span>
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="item-right">
          <div class="item-title">
            <h3 @click="close" :class="{'back': contentType}">{{newsTitle}}</h3>
            <h3 :class="{'hide': !contentType}"> > </h3>
            <h3 :class="{'hide': !contentType}">新闻详情</h3>
            <div class="line"></div>
          </div>
          <!--<div class="line"></div>-->
          <!--公司新闻-->
          <div class="news-list" :class="{'hide': contentType,'hide': listType !== 1}">
            <div @click="locaOut(item)" class="news-item" v-for="(item, index) in contentList" :key="index">
              <div class="news-item-img">
                <img src="./list_1.png" alt="">
              </div>
              <div class="news-item-left">
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
              </div>
              <div class="news-item-right">
                <p>{{item.date}}</p>
              </div>
            </div>
          </div>
          <!--行业动态-->
          <div class="active-list" :class="{'hide': listType !== 2}">
            <div class="news-item" v-for="(item, index) in contentList" :key="index">
              <div class="news-item-img">
                <img src="./list_1.png" alt="">
              </div>
              <div class="news-item-left">
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
              </div>
              <div class="news-item-right">
                <p>{{item.date}}</p>
              </div>
            </div>
          </div>
          <!--最新公告-->
          <div class="notice-list" :class="{'hide': listType !== 3}">
            <div class="news-item" v-for="(item, index) in contentList" :key="index">
              <div class="label clearfix">
                <h3 class="left">{{item.title}}</h3>
                <p class="date">{{item.date}}</p>
                <span class="right" :class="{'hide': item.open}" @click="openContent(item)">展开</span>
                <span class="right" :class="{'hide': !item.open}" @click="openContent(item)">关闭</span>
              </div>
              <div class="notice-content" :class="{'hide': !item.open}">
                <p>{{item.content}}</p>
              </div>
              <!--<div class="news-item-left">-->
              <!--<h3>{{item.title}}</h3>-->
              <!--<p>{{item.content}}</p>-->
              <!--</div>-->
              <!--<div class="news-item-right">-->
              <!--<p>{{item.date}}</p>-->
              <!--</div>-->
            </div>
          </div>
          <div class="news-detail" :class="{'hide': !contentType}">
            <h3>{{detailContent.title}}</h3>
            <p class="date">{{detailContent.date}}</p>
            <p v-for="(group, index) in detailContent.detail" :key="index">
              {{group}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: [
          {
            type: 1,
            title: '公司新闻',
            active: true,
            content: [
              {
                url: 'https://www.baidu.com',
                img: './list_1.png',
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-公司新闻1111',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              },
              {
                url: 'https://www.baidu.com',
                img: './list_1.png',
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-公司新闻222',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              },
              {
                url: 'https://www.baidu.com',
                img: './list_1.png',
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-公司新闻333',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              }
            ]
          },
          {
            type: 2,
            title: '行业动态',
            active: false,
            content: [
              {
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-行业动态aaa',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              },
              {
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-行业动态bbb',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              },
              {
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-行业动态ccc',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              }
            ]
          },
          {
            type: 3,
            title: '最新公告',
            active: false,
            content: [
              {
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-最新公告eeee',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作关于与浙江大学技术战略合作关于与浙江大学技术战略合作关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                open: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              },
              {
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-最新公告wwww',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                open: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              },
              {
                title: '上海添洛新能源与浙江大学技术战略合作-公司介绍-最新公告qqq',
                content: '关于与浙江大学技术战略合作关于与浙江大学技术战略合作',
                date: '2017年12月1号',
                status: false,
                open: false,
                detail: [
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情11111',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情22222',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情2333',
                  '这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情这里是新闻详情444'
                ]
              }
            ]
          }
        ],
        contentType: false, // false:新闻列表 true：新闻详情
        detailContent: {} // 新闻详情
      }
    },
    computed: {
      listType() { // 列表类型
        let n = 1
        this.list.forEach(function (value) {
          if (value.active) {
            n = value.type
          }
        })
        return n
      },
      newsTitle() {
        let title = ''
        this.list.forEach(function (value) {
          if (value.active) {
            title = value.title
          }
        })
        return title
      },
      contentList() {
        let arr = []
        this.list.forEach(function (value) {
          if (value.active) {
            arr = value.content
          }
        })
        return arr
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      openContent(item) {
        item.open = !item.open
      },
      locaOut(item) {
        let url = item.url
        window.location.href = url
      },
      select(item, list) {
        this.close()
        list.forEach(function (value, index) {
          value.active = false
        })
        item.active = true
      },
      getDetail(items) {
        console.log(items)
        this.status = !this.status
        this.contentType = this.status
        if (this.status) {
          this.detailContent = items
        }
      },
      close() {
        this.contentType = false
        this.list.forEach(function (value) {
          value.content.forEach(function (val2) {
            val2.status = false
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  @import "~@/common/stylus/clearfixx.styl"
  @import "~@/common/stylus/mixin.styl"

  .hide
    display: none !important

  .news
    min-height: 100%
    padding-bottom: 171px
    background: $color-background-f
    .banner-bg
      width: 100%
      height: 380px
      margin: 0 auto
      background: $color-background-f
      overflow: hidden
      text-align: center
      img
        display: inline-block
        height: 380px
    .item1
      width: 100%
      .content
        width: 1120px
        min-height: 400px
        margin: 0 auto
        font-size: 0
        vertical-align: top
        .item-left
          float: left
          /*display: inline-block*/
          width: 155px
          /*min-height: 400px*/
          height: 100%
          background: $color-background
          text-align: center
          padding-bottom: 60px
          h3
            font-size: $font-size-large
            font-weight: 600
            margin: 20px 0
          ul
            li
              height: 40px
              line-height: 40px
              font-size: $font-size-medium
              .icon
                display: inline-block
                background-size: 10px 10px !important
              &:hover
                font-weight: 600
                cursor: pointer
              &.active
                background: $color-theme-e
                color: $color-text-theme-e
                font-weight: 600
                .icon
                  background: url("./san.svg") no-repeat
                  display: inline-block
                  width: 10px
                  height: 10px
        .item-right
          float: right
          /*display: inline-block*/
          width: 950px
          min-height: 400px
          background: $color-background
          padding: 15px
          .item-title
            position: relative
            .back
              color: $color-text-turn
              cursor: pointer
            h3
              display: inline-block
              margin-right: 10px
              font-size: $font-size-medium-x
            .line
              position: absolute
              left: -15px
              top: 0
              height: 14px
              background: $color-theme
              width: 4px
              margin-bottom: 10px
          h3
            font-size: $font-size-medium
            font-weight: 600
            margin-bottom: 10px
          .news-list, .active-list, .notice-list
            .news-item
              font-size: 0
              border-bottom: 1px dotted $color-text-6
              padding: 10px 0
              position: relative
              h3
                font-weight: 600
                font-size: $font-size-medium-x
              p
                font-size: $font-size-medium
                color: $color-text-d
              .news-item-img
                float: left
                width: 100px
                height: 70px
                overflow: hidden
                background: $color-background-f
                margin-right: 10px
                img
                  width: 100px
                  min-height: 70px
              .news-item-left
                display: inline-block
                width: 520px
                height: 70px
              .news-item-right
                position: absolute
                right: 0
                bottom: 10px
          .notice-list
            .news-item
              .label
                .left
                  float: left
                  width: 65%
                  no-wrap()
                .date
                  float: left
                .right
                  float: right
                  font-size: $font-size-medium
                  color: $color-theme
                  extend-click()
              .notice-content
                p
                  line-height: 1.4
          .news-detail
            .date
              margin-bottom: 10px
              text-align: center !important
            h3
              font-weight: normal
              text-align: center
              margin-top: 40px
            p
              font-size: $font-size-medium
              color: $color-text-4
              line-height: 1.4
              text-indent: 2em
              text-align: left !important
              margin-bottom: 10px

</style>
