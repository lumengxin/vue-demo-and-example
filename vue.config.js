const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.BASE_URL

module.exports = {
  publicPath: BASE_URL,
  assetsDir: 'static',
  devServer: {
    port: 8888,
    open: true
  },
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('stylus', resolve('src/assets/stylus'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  css: {
    // 是否使用css分离插件(开启后，修改样式需要手动刷新生效)
    extract: false,
    loaderOptions: {
      // 设置stylus中global.styl为全局引用
      stylus: {
        // prependData: `@import "~stylus/global.styl";`
        import: '~stylus/global.styl'
      }
    }
  }
}
