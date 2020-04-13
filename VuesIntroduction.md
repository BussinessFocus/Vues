[comment]:author:lxy  
[comment]:date:2020/04/10

## AntPhone使用介绍

### 目录结构
```
build ---- 存放打包后的程序文件
config ---- create-react-app 脚手架弹出的webpack的配置文件，目前没有对其做任何修改
public ---- web应用程序的静态公共资源，此文件夹内的文件会原封不动的打包到程序的首层目录里
    favicon.ico ---- web应用程序icon图标
    index.html ---- web应用程序的html页面模板
    logo192.png ---- 192*192的应用程序图标，png格式的，当将程序添加到桌面时会用到
    logo512.png ---- 192*192的应用程序图标，png格式的，当将程序添加到桌面时会用到
    manifest.json ---- 当将程序添加到桌面时会读取这个文件，存放web应用程序的信息
    robots.txt ---- 针对搜索引擎蜘蛛的文件
scripts ---- 存放npm执行webpack命令时对应的配置文件
    build.js ---- 打包生产环境的配置文件
    buildTest.js ---- 打包测试环境的配置文件
    start.js ---- 运行npm start/yarn start 时的配置文件，是在开发环境下使用的
    test.js ---- 测试程序时的配置文件
src ---- 存放web应用程序的开发代码的文件夹，是开发者的最主要工作目录
    assets ---- web应用程序开发所需的静态资源，包含图片，字体文件等
    common ---- 在当前项目中通用的js方法
        request.js ---- 在当前项目中通用的数据请求方法，这个方法应是固有的，根据不同项目可进行相应修改
    components ---- 存放当前项目中的通用组件
    config ---- 存放web应用程序的配置
        index.js ---- 配置文件
    pages ---- web应用程序的页面
        page1.jsx ---- 页面demo1
        page2.jsx ---- 页面demo2
        page3.jsx ---- 页面demo3
    routers ---- web应用程序路由文件的存放地址
        index.jsx ---- 所有路由配置汇总导出的文件
        router1.jsx ---- 开发人员1使用的路由配置
        router2.jsx ---- 开发人员2使用的路由配置
        router3.jsx ---- 开发人员3使用的路由配置，如果开发人员增多还可以再添加
    style ---- 每个页面对应的样式文件的存放处
        page1.css ---- 页面样式demo1
        page2.css ---- 页面样式demo2
        page3.css ---- 页面样式demo3
    index.jsx ---- web应用程序的入口文件
    serviceWorker.js ---- Service Worker功能使用文件
.gitignore ---- git仓库的忽略文件
AntPhoneIntroduction.md ---- 当前文档
package.json ---- nodejs包管理文件
README.md ---- 项目说明文档
yarn.lock ---- yarn安装包的依赖树锁定文件
```

### 使用的主要技术框架介绍
vue + iView

### 待完善问题

