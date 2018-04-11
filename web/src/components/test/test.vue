<template>
    <div class="test">
      <div class="content clearfix">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  @import "~@/common/stylus/clearfixx.styl"

  .test
    position: absolute
    top: 70px
    bottom: 0
    width: 100%
    .content
      width: 1120px
      height: 100%
      margin: 0 auto
      .left
        float: left
        height: 100%
        width: 300px
        background: #44a92a
      .right
        float: right
        height: 100%
        width: 600px
        background: #dd8d39
</style>
