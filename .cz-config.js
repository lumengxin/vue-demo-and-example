module.exports = {
  // 修改性质
  types: [
    { value: 'feat', name: ' 🍓 feat: 新功能' },
    { value: 'fix', name: ' 🏓 fix: 修复bug' },
    { value: 'docs', name: ' 📦 docs: 文档修改' },
    { value: 'style', name: ' 👨🏻‍💻 style: 代码格式（空格、分号等）' },
    { value: 'refactor', name: ' 🏗 refactor: 重构（非feat、非fix）' },
    { value: 'ci', name: ' 👀 ci: 持续集成的配置文件或脚本的修改' },
    { value: 'perf', name: ' 🧪 perf: 提高性能' },
    { value: 'test', name: ' 🦄 test: 添加缺少的测试' },
    { value: 'build', name: ' 🐛 build: 构建工具或外部依赖包的修改' },
    { value: 'WIP', name: ' 👨🏻‍🚀 WIP: 进行中的工作' },
    {
      value: 'chore',
      name: ' 🐢 chore: 杂项。其他不修改源代码与测试代码的修改',
    },
    { value: 'revert', name: ' 🌚 revert: 撤销某次提交' },
  ],
  // 修改范围
  scopes: [{ name: '数据层' }, { name: '控制层' }, { name: '视图层' }],
  // 选择器提示信息
  messages: {
    type: '请选择【修改的性质】：',
    scope: '请选择【修改的范围】：',
    subject: '请输入简明的【修改的描述】：', // 主题，简短描述。一行
    confirmCommit: '确认提交吗？',
  },
  allowCustomScopes: false,
  allowBreakingChanges: [],
  // Body: 对 subject 的补充。可以多行。Footer: 主要是一些关联 issue 的操作。
  skipQuestions: ['body', 'footer'],
  // 描述的长度限制
  subjectLimit: 100,
}
