<template>
  <div class="de-header">
    <div class="content g-container">
      <div class="logo">
        <img src="" alt="logo" />
        <span class="title">vdae</span>
      </div>
      <div class="search">
        <input type="search" />
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
  background $headerBgColor
  line-height $headerHeight
  .content
    display flex
    justify-content space-between
    .logo
      img
        width .24rem
        height .24rem
      span
        color pink
    .search
      color red
    .navs
      .nav-list
        display flex
        justify-content space-between
</style>
