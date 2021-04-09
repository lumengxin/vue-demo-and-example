<template>
  <div class="index">
    <div class="welcome">
      <h1>记录前端开发中的一些实用知识</h1>
      <p>没有固定形式，想到哪做到哪，到处好的网站抄一点样式布局。</p>
      <p>
        整理一些知识文档，以实际例子形式记录工作日常开发中一些亮点，或者一些常规及非常规处理方案。
      </p>
      <div class="topic">
        <div v-for="(item, index) in topics" :key="index" class="topic-card">
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <div class="title">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components根目录vue可以直接使用，无需注册
export default {
  name: 'Index',
  data() {
    return {
      topics: [
        {
          icon: 'aaa',
          title: '问答',
          content: '提出问题并向他人学习',
        },
        {
          icon: 'aaa',
          title: '问答',
          content: '提出问题并向他人学习',
        },
        {
          icon: 'aaa',
          title: '问答',
          content: '提出问题并向他人学习',
        },
        {
          icon: 'aaa',
          title: '问答',
          content: '提出问题并向他人学习',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.index
  padding-top 3.75rem
  .welcome
    text-align center
    color #fff
    background no-repeat 50% url(static/welcome-bg.png)
  .topic
    position relative
    top 3.75rem
    display flex
    justify-content space-between
    align-items center
    min-width 58.75rem
    width 70rem
    margin 0 auto
    .topic-card
      border 1px solid darkgrey
      background #fff
      color #000
      border-radius .25rem
      box-shadow .0625rem .0625rem .0625rem darkgrey
</style>
