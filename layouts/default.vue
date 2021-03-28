<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/common/Header'
export default {
  components: {
    Header,
  },
}
</script>
