<template>
  <div class="foot item item7">
    <div class="content">
      <h4>服务热线</h4>
      <h2>021-36036680</h2>
      <div class="list">
        <router-link tag="a" to="/introduction">公司介绍</router-link>
        <router-link tag="a" to="/news">新闻中心</router-link>
        <router-link tag="a" to="/project">项目介绍</router-link>
        <router-link tag="a" to="/aboutUs">关于我们</router-link>
        <router-link tag="a" to="/contact">联系我们</router-link>
      </div>
      <p>Copyright © 2017上海添洛新能源科技有限公司All Rights Reserved 沪ICP备15016008</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"

  .foot
    position: absolute
    left: 0
    right: 0
    bottom: 0
    background: $color-background-foot
    text-align: center
    padding: 15px 0
    .content
      width: 1120px
      margin: 0 auto
      h2
        font-size: $font-size-large-xx
        margin: 12px 0
        font-weight: bold
      h4
        font-size: $font-size-medium-x
        margin: 12px 0
      .list
        margin-bottom: 15px
        a
          font-size: $font-size-medium
          color: $color-text-3
          margin: 0 20px
          &:hover
            color: $color-theme
      p
        font-size: $font-size-medium
        color: $color-text-d
</style>
