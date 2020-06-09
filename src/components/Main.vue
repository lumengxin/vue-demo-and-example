<template>
  <div class="de-main">
    <de-header></de-header>
    <div class="de-content">
      aaa
    </div>
    <de-footer></de-footer>
  </div>
</template>

<script>
import DeHeader from 'components/DeHeader/DeHeader'
import DeFooter from 'components/DeFooter/DeFooter'

export default {
  name: 'Main',
  components: {
    DeHeader,
    DeFooter
  },
  data: () => ({
  })
}
</script>

<style lang="stylus" scoped>
@import '~stylus/base'

.de-main
  .de-content
    width 1100px
    margin 0 auto
    background pink
    margin-top $headerHeight
    padding-bottom 10rem
</style>
