<template>
  <div class="de-header">
    <div class="content g-container">
      <div class="logo">
        <img src="../../assets/images/logo2.png" alt="logo" />
        <span class="title">Vdae</span>
      </div>
      <div class="search">
        <form class="search-from">
          <i class="iconde iconsearch"></i>
          <input type="search" />
        </form>
      </div>
      <div class="navs">
        <ul class="nav-list">
          <li class="nav-item">Web</li>
          <li class="nav-item">网络</li>
          <li class="nav-item">后端</li>
        </ul>
      </div>
      <div class="others">other</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '~stylus/base.styl'

.de-header
  position fixed
  top 0
  width 100%
  font-size $textSize
  height $headerHeight
  background $mainBgColor
  line-height $headerHeight
  .content
    display flex
    justify-content space-between
    align-items center
    .logo
      width 1.2rem
      img
        width .36rem
        height .36rem
        vertical-align middle
      span
        color pink
        margin-left .1rem
    .search
      .search-from
        border .01rem solid #fff
        border-radius .2rem
        width 2.5rem
        height .35rem
        line-height .35rem
        padding 0 .05rem
        input
          width 85%
          margin-left .05rem
          background $mainBgColor
    .navs
      width 2rem
      .nav-list
        display flex
        justify-content space-between
</style>
