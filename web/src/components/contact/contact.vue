<template>
    <div class="contact">
      <div class="banner-bg">
        <img src="./home_banner.png" alt="">
      </div>
      <div class="item item6">
        <div class="content">
          <div class="title">
            <div class="title-left">
              <h3>联系我们</h3>
            </div>
            <div class="title-right">
              <router-link tag="a" to="/home">查看更多</router-link>
            </div>
            <p class="bg-text">Contact us</p>
          </div>
          <div class="line"></div>
          <div class="page">
            <img src="./map.png">
          </div>
          <div class="more">
            <p>上海添洛新能源科技有限公司</p>
            <p>021-36036680
            <p>tianluoxny@163.com</p>
            <p>上海市静安区河南北路485号银历大厦16楼</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"

  #app
    $color-background-d

  .contact
    background: $color-background-d
    min-height: 100%
    padding-bottom: 157px
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
    .item
      width: 100%
      .content
        width: 1120px
        margin: 0 auto
        min-height: 400px
        background: $color-background
        padding: 0 20px
        .title
          position: relative
          height: 42px
          line-height: 42px
          padding: 10px 0
          margin-bottom: 5px
          .title-left
            position: absolute
            left: 0
            h3
              font-size: $font-size-medium-x
              font-weight: bold
          .title-right
            position: absolute
            right: 0
            display: inline-block
            a
              color: $color-theme
              font-size: $font-size-medium
          .bg-text
            font-size: $font-size-large-xl
            color: $color-theme-d
        .line
          height: 2px
          background: $color-text-9
          width: 30px
          margin-bottom: 20px
    .item6
      .page
        width: 100%
        height: 195px
        overflow: hidden
        margin-bottom: 20px
        img
          width: 100%
          min-height: 100%
      .more
        p
          font-size: $font-size-medium
          color: $color-text-d
          height: 20px
          line-height: 20px
          margin-bottom: 9px
</style>
