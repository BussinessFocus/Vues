## xxxxxx项目

### 项目简介：

### 部署信息：

测试服务器：
> IP地址及端口:   
> 服务器类型：IIS | node | nginx | apache  
> 远程登录服务器端口：  
> 远程登录服务器用户名：  
> 远程登录服务器密码：  
> 域名及端口：  
> 是否关联微信公众号：否  
> 公众号名称：

正式服务器：
> IP地址:   
> 服务器类型：IIS | node | nginx | apache  
> 远程登录服务器端口：  
> 远程登录服务器用户名：  
> 远程登录服务器密码：  
> 域名及端口：  
> 是否关联微信公众号：否  
> 公众号名称：

### 前端框架：
Vues

### 目录结构介绍
```
public 页面html模板与网站logo图标
src 工程文件存放文件夹
    assets  静态资源存放文件夹，包括图片，字体文件等
    components 组件文件夹
    config 工程配置文件，配置后台接口访问的url等，并且区分开发、测试、生产环境
        index.js
    pages 项目页面文件
        PageDemo1.vue  页面示例
    routers 路由存放文件夹
        index.js 各路由汇总导出文件
        router1.js  路由文件1 
        router2.js  路由文件2
        router3.js  路由文件3
        router4.js  路由文件4
    store 项目状态管理文件夹
        modules 存放各个页面对应的状态模块文件夹
        index.js 各模块状态汇总导出文件
    utils 项目工具库文件,除了固定的几个工具函数文件外，当前项目用到的公共函数也存放在这个文件夹
        request.js  请求函数统一封装
    App.vue 根组件
    main.js 程序入口文件
.babelrc  babel相关配置文件
.gitignore  git的忽略文件
babel.config.js babel相关配置文件
package.json 项目配置文件
README.md  项目说明文件
vue.config.js  vue配置文件
```

### 使用的主要技术框架介绍
必选：vue + iView + vue-router + axios + async-validator(iView内部集成)

可选：  
vuex  
dayjs  
lodash  
utility  
qs  
vue-highlight.js（高亮显示代码的控件）  
idCard (身份证信息读取与验证)  

自定义组件：  
ImgCropper（图片裁剪）  
MyVideoPlayer（视频播放）  
RichText（富文本）  
Emotion（表情包输入）  
RenderEmotion（表情包渲染）  