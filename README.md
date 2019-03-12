# debt-project

> A Vue.js project

## 环境
```
nodejs v8.9.0
npm install -g cnpm --registry=https://registry.npm.taobao.org (安装cnpm)
```
## Build Setup

```
安装项目依赖
npm install

项目调试，热刷新  localhost:9527
npm run dev

build for production and view the bundle analyzer report
npm run build --report
```

## 文档结构说明
```
├── build                      // 构建相关
├── config                     // 配置相关
├── mockApi                    // 项目mock 模拟数据
├── src                        // 源码
│   ├── api                    // 所有请求，每个模块的请求都放在里面，请分开来写
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── configs                // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── pages                  // pages
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
├── theme                      // elmentUI编译工具生成的主题文件
├── element-variables.scss     // 执行et操作需要执行的文件，一般在这里面进行主题色的变更
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── index.html                 // html模板
└── package.json               // package.json
```
----------

## 需要注意的地方
- API接口需要对应pages目录来组织，方便维护
- pages中对应的页面对应导航中的各个模块
- components中存放着各个模块对应的组件文件夹名称，也需要同pages下的目录相同


## 构建步骤
- 1.进入目录下 cnpm i 安装全局依赖
- 2.测试环境打包  npm run build:sit
- 3.线上环境打包  npm run build:prod
- 4.预生产环境打包 npm run build:fat

## 文档列表
1. [关于api文档的说明](src/api/api-Readme.md)
2. [入口文件文档说明](src/entrypoint-Readme.md)
3. [utils文档说明](src/utils/utils-Readme.md)
4. [style文档说明](src/style/style-Readme.md)
5. [store文档说明](src/store/store-Readme.md)
6. [router文档说明](src/router/router-Readme.md)
7. [pages文档说明](src/pages/pages-Readme.md)
8. [mock 项目前期的时候会使用]()
9. [mixins文档说明](src/mixins/mixins-Readme.md)
10. [configs文档说明](src/configs/configs-Readme.md)
11. [components组件说明](src/components/components-Readme.md)
## git提交说明
1. 首先 ```clone```项目到本地,然后切换到对应分支进行开发操作,不能直接在```master```上直接操作;
2. 更改的代码提交至当前分支,注:当前提交的```comment```要简明扼要的写明提交原因
  增加新功能,则需要按照以下格式: ```add:XXX功能```;
  修改自查的bug:```fix:XXX问题```;
  修改```禅道bug```: ```fix: #123 XXX问题```
  其他修改: ```modify:XXXXXX```
3. 当前版本需求完成后合并入```master```分支,根据当前```master```版本打```tag```,```tag```命名要求详见之前```tag```
