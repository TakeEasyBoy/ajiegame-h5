## API说明
**[common.js](common.js)**重新封装了**axios**,请求的路径一般由后台分了模块,前端按对应的模块进行请求,特别注意version,目前会传一个默认的 **v1**, 如若后台更新了版本,则在对应的接口单独传一个**version**
### 请求的API
```
const version = 'v1'
/**
 *
 * @param {BEmodules} BEmodules 后端模块
 * @param {*} api 请求的API
 * @returns 生成好的api接口
 */
export const generateUrl = (BEmodules, api, v = version) => `/api/${BEmodules}/${v}/${api}`
```
### 把token封装进body中
```
/**
 * 将token插入body中, 若无需传入token则不需要该函数,
 * @param {*} params 以对象的形式传入 没有就不传
 */
export const generateBody = (params) => Object.assign({}, { token: getToken() }, params)
```
由于业务特殊性,token中包含了用户信息,因此**token**可以表示用户的身份,所以我们将**token**封装进了请求体的**body**中,当接口需要传token时,我们就使用这个函数,否则传
所有请求都使用 **post**方式

---
### 关于一次一密的说明 [secretOnce.js](secretOnce.js)
涉及到的接口有如下几个:
1. [/findPWDBySMS](usercenter.js)
2. [/updatePWD](login.js)
3. [/loginWithTelNoAndPwd](login.js)
4. [用户中心](usercenter.js)

具体说明详见 [一次一密实现说明](../utils/crypto.js)

加密方式采用 ```aes-cbc-128-psk5``` java中的psk5对应的就是js中的psk7,加密库 ```crypto-js```

一次一密登陆流程:
1. **client**向**server**请求密钥 **randomKey**,**randomKey**包含2部分: 前32位字符串为**keyIndex**, 后32位为由16位的字符串转换成的32位16进制的字符串;
2.**client**拿到**ramdomkey**以后,后32位通过```ascii```转为16位的用于加密的**key**,
3. 加密:需要传输的密文通过加密后以```密文+keyindex```的方式传回服务端

### 文件上传一律通过form-data的形式,因此单独使用一个接口,不在使用common.js中的函数
涉及的文件有
1. [upload.js](upload.js)
2. [uploadpictures.js](uploadpictures.js)
