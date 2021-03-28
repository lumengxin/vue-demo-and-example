<template>
  <div class="main-container">
    <Header />
    <div class="main-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
export default {
  components: {
    Header,
  },
}
</script>
