<template>
  <div class="header">
    <div class="logo">
      <img src="~/assets/images/logo.png" alt="logo" />
      <h2>Deex</h2>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">文档</template>
          <el-menu-item index="2-1">demo</el-menu-item>
          <el-menu-item index="2-2">example</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">示例</el-menu-item>
        <el-menu-item index="4"
          ><a href="#" target="_blank">帮助</a></el-menu-item
        >
      </el-menu>
    </div>
    <div class="opt">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>中文</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
    }
  },
  handleSelect(key, keyPath) {
    console.log(key, keyPath)
  },
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  justify-content space-between
  width 100%
  height 3.75rem
  .logo
    display flex
    justify-content center
    align-items center
    img
      width 2rem
      height 2rem
    h2
      display inline
  .opt
    line-height 3.75rem
</style>
