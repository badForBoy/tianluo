<template>
  <div id="app">
    <tab></tab>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  import Foot from 'components/foot/foot'

  export default {
    components: {
      Tab,
      Foot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/index.styl"

  #app
    min-height: 100vh
    position: relative
    /*padding-bottom: 171px*/
    display: flex
    flex-direction: column
</style>
