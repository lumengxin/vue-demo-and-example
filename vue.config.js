const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  devServer: {
    port: 8888,
    open: true
  },
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('stylus', resolve('src/assets/stylus'))
      .set('components', resolve('src/components'))
  }
}
