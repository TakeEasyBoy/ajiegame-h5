## utils文档说明
1. [auth.js](auth.js)用于存储**sessionstorage**,使用**md5**进行了小小的加密
2. [common.js](common.js)声明的一些个公共函数,包括单位转换,防抖,等等,都通过```Vue.prototype.$method```来注册为全局的方法
3. [crypto.js](crypto.js)用于**一次一密**的加解密
4. [generateTitle.js](generateTitle.js)用于生成面包屑的文字
