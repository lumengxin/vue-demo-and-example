<template>
  <div class="main">
    <div class="header">
      header
    </div>

    <div class="container">
      <div class="aside-left">
        aside
      </div>
      <div class="content">
        content
      </div>
      <div class="aside-right">
        right
      </div>
    </div>

    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
  })
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/base'

  .main
    width 100%
    height 100%
    background-color $bgColor
    .header
      width 100%
      height 3.5rem
      background-color $bgColorHeader
    .container
      width 100%
      height 35rem
      margin .6rem auto
      border 1px solid blue
      border-radius .3rem
      .aside-left
        width 20%
        height 30rem
        background #baf
        float left
      .content
        width 60%
        height 30rem
        background blue
        float left
      .aside-right
        width 20%
        height 30rem
        background #baf
        float right
    .footer
      position fixed
      bottom 0
      width 100%
      height 15rem
      background-color #baf
</style>
