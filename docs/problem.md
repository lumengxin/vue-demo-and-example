# 开发过程问题

## prettier工具相关

1. error  Delete `␍`  prettier/prettier ？

原因：windows下和linux下的文本文件的换行符不一致

解决：

1. 手动将CRLF换成LF。费时，不科学

2. yarn run lint --fix。自动修复

3. 配置.prettierrc文件。不让prettier检测文件每行结束的格式。不能兼容跨平台开发。
> "endOfLine": "auto"

4. git全局配置
> git config --global core.autocrlf false