# vue-demo-and-example

## 开始

```bash
# 安装依赖
$ yarn install

# 在本地主机上热加载服务 localhost:3000
$ yarn dev

# 为生产和启动服务器构建
$ yarn build
$ yarn start

# 生成静态项目
$ yarn generate
```

## 初始项目

构建工具初始化一个项目

`yarn create nuxt-app vue-demo-and-example`

![初始化项目](./docs/images/初始化项目.png)

## 项目规范

### commit规范

[git commit文章参考](https://juejin.cn/post/6863047306754097160)

#### 自定义提交说明

1. 安装 cz-customizable
> yarn add cz-customizable -D

2. 创建.cz-config.js,设置对应配置

3. package.json中新增
```
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
},
```

#### 校验提交

1. 项目中安装 husky 、commitlint
> yarn add @commitlint/cli @commitlint/config-conventional husky -D

2. package.json中新增
```
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

3. 创建 commitlint.config.js 文件，定义提交规范

## 开发

