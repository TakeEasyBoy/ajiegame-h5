/*
 * @Author: huangmingchao
 * @Date: 2018-09-21 14:00:08
 * @Last Modified by: huangmingchao
 * @Last Modified time: 2018-09-21 17:33:35
 */
import { getToken } from 'utils/auth'
import axios from '../configs/http'
const version = 'v1'
/**
 *
 * @param {BEmodules} BEmodules 后端模块
 * @param {*} api 请求的API
 * @returns 生成好的api接口
 */
export const generateUrl = (BEmodules, api, v = version) => `/api/${BEmodules}/${v}/${api}`
/**
 * 将token插入body中, 若无需传入token则不需要该函数,
 * @param {*} params 以对象的形式传入 没有就不传
 */
export const generateBody = (params) => Object.assign({}, { token: getToken() }, params)
/**
 * 同意采用post方式进行请求
 * @param {*} url 生成好的url
 * @param {*} params 请求的参数
 */
export const _axios = (url, params) => axios({
  method: 'post',
  url: url,
  data: params
})
