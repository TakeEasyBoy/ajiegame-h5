import { generateUrl, _axios, generateBody } from './common'
const c_modules = 'operate'
/**
 * @param String 反馈内容
 * @param String qq
 * @param String wx
 * @param array 上传地址id
 */
export const addFeedback = (datas) => _axios(
  generateUrl(c_modules, 'addFeedback'),
  generateBody({ ...datas })
)
