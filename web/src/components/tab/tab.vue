<template>
  <div class="tab">
    <div class="content clearfix">
      <div class="item-left">
        <img src="./logo.svg" alt="">
      </div>
      <div class="item-right">
        <router-link
          v-for="(item, index) in list"
          :key="index"
          tag="div"
          class="tab-item"
          :to="item.route">
          <span @click="animate(item)">{{item.title}}</span>
          <span class="line"></span>
        </router-link>
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
            active: true,
            title: '首页',
            moveclass: 'move1',
            route: '/home'
          },
          {
            active: false,
            title: '公司介绍',
            moveclass: 'move2',
            route: '/introduction'
          },
          {
            active: false,
            title: '新闻中心',
            moveclass: 'move3',
            route: '/news'
          },
          {
            active: false,
            title: '项目介绍',
            moveclass: 'move4',
            route: '/project'
          },
          {
            active: false,
            title: '关于我们',
            moveclass: 'move5',
            route: '/aboutUs'
          },
          {
            active: false,
            title: '联系我们',
            moveclass: 'move6',
            route: '/contact'
          }
        ],
        classType: 'move1'
      }
    },
    computed: {
      moveClass() {
        let c = ''
        this.list.forEach(function (value) {
          if (value.active) {
            c = value.moveclass
          }
        })
        console.log(c)
        return c
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  @import "~@/common/stylus/clearfixx.styl"

  .tab
    height: 70px
    background: $color-theme
    .content
      width: 1120px
      height: 100%
      margin: 0 auto
      display: flex
      align-items: center
      justify-content: space-between
      .item-left
        min-height: 1px
        width: 40%
        float: left
        img
          height: 55px
      .item-right
        position: relative
        width: 60%
        height: 100%
        font-size: 0
        float: right
        /*.line
          position: absolute
          bottom: 0
          left: 25px
          height: 4px
          width: 60px
          background: $color-text*/
        .tab-item
          display: inline-block
          font-size: $font-size-medium-x
          color: $color-text-f
          line-height: 66px
          width: 16.66667%
          text-align: center
          &:hover
            color: $color-text
            cursor: pointer
          .line
            height: 4px
          &.router-link-active
            color: $color-text
            span
              display: block
              margin: 0 auto
            .line
              width: 60%
              background: $color-text
</style>
