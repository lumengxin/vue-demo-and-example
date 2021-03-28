# 开发过程问题

## prettier工具相关

### 1. error  Delete `␍`  prettier/prettier ？

原因：windows下和linux下的文本文件的换行符不一致

解决：

1. 手动将CRLF换成LF。费时，不科学

2. yarn run lint --fix。自动修复

3. 配置.prettierrc文件。不让prettier检测文件每行结束的格式。不能兼容跨平台开发。
> "endOfLine": "auto"

4. git全局配置
<<<<<<< HEAD
> git config --global core.autocrlf false

### 2. husky中配置hook不生效？

原因：可能git版本比较老，.git/hooks中缺少husky.sh等文件；可能window系统钩子绑定失败...

解决：

尝试git升级(2.23->2.31); 卸载husky重装; yarn改npm; 删除本地项目从远程拉; 从其他项目拷
贝缺失文件...都无效

=======
> git config --global core.autocrlf false
>>>>>>> 75f85d0b909726c9720ab0f4901921bd641c3f54
