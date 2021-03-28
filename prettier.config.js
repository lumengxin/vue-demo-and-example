module.exports = {
  // 不要分号
  semi: false,
  // 单引号
  singleQuote: true,
  // 不检查每行结尾
  endOfLine: 'auto',
  // 数组 对象尾随逗号
  trailingComma: 'es5',
  // 对象空格
  bracketSpacing: true,
  // 箭头函数是否省略括号
  arrowParens: 'avoid',
  // jsx闭标签是否另起一行
  jsxBracketSameLine: false,

  // printwidth: 100, // 超过最大值换行
  // tabWidth: 2, // 缩进字节数
  // useTabs: false, // 缩进不使用tab，使用空格
  // proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  // disableLanguages: ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  // eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
  // htmlWhitespaceSensitivity: "ignore",
  // ignorePath: ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  // jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  // parser: "babylon", // 格式化的解析器，默认是babylon
  // requireConfig: false, // Require a 'prettierconfig' to format prettier
  // stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
  // tslintIntegration: false // 不让prettier使用tslint的代码格式进行校验
}
