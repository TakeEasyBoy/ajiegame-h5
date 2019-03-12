/**
 * 统一配置axios
 * 使用qs.stringify解决axios跨域问题
 * 配置axios请求类型为post时，使用qs.stringify来实现跨域访问，以及每次请求携带token
 * 配置请求成功后res，实现诸如登录失败，登录超时，账户密码错误和请求错误等拦截器
 */
import axios from 'axios'
// import Raven from 'raven-js'
import { Message } from 'element-ui'
// axios 配置
axios.defaults.timeout = 30000 // 请求超时设置
axios.defaults.baseURL = process.env.BASE_API //  通过获取当前环境来决定使用哪个API
axios.defaults.headers.post['Content-Type'] = 'application/jsoncharset=utf-8'

/**
 * sign 签名
 * @param {string} body 请求的数据体,JSON.stringify()
 * @param {string} secretid 后端给的
 * @param {string} timestamp 每次请求的时间戳,毫秒
 */
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
    }
    return config
  },
  err => {
    return Promise.reject(err)
})
// http 拦截器
axios.interceptors.response.use(
  res => {
    // 拦截下载,后端返回的是blob流,如果是空的,则type='application/json'
    // 拦截主系统
    return res
  },
  error => {
    // Raven.captureException(error)
    console.log('error', error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break
        case 500:
          Message({
            message: '服务器内部错误,请稍后重试',
            type: 'error',
            duration: 1000
          })
          break
        default:
          break
      }
    } else {
      Message({
        message: '网络请求超时，请稍后再试或联系管理员',
        type: 'error',
        duration: 1 * 2000
      })
      throw error
    }
  })
export default axios
