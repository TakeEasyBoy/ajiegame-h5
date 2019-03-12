// 用于生成乱七八糟的url,以及将token放进body里面
import { generateUrl, generateBody, _axios } from './common'
import { getUserID } from 'src/utils/auth'
const BeModule = 'bank'
const usercenter = 'ucs'
/**
 * admin账号密码登录
 * @param username
 * @param password
 */
export const accountLogin = (telNo, password) => _axios(
  generateUrl(BeModule, 'loginBankAdminAccount'),
  { password, telNo }
)
// export const accountLogin = (key) => _axios(
//   generateUrl(BeModule, 'loginBankAdminAccount'),
//   { password, telNo }
// )
/**
 * 获取用户信息
 * @param 通过token获取
 */
export const getUserInfo = () => _axios(
  generateUrl(BeModule, 'loginWithToken'),
  generateBody()
)
/**
 * 注销登陆
 */
export const logout = () => _axios(
  generateUrl(usercenter, 'logout'),
  generateBody()
)
/**
 *
 * @param {*} password 旧密码
 * @param {*} password_new 新密码
 * @param {*} password_confirm 确认密码
 */
export const modifyPwd = (pwdOld, pwdNew) => _axios(
  generateUrl(usercenter, 'updatePWD'),
  generateBody({
    userID: getUserID(),
    pwdOld,
    pwdNew
  })
)
/**
 *获取重置密码的手机验证码
 * @param {*} data 手机号码
 */
export const getSMSCode = (telNo) => _axios(
  generateUrl(usercenter, 'getSMSCode'),
  { telNo }
)
/**
 * 找回密码（根据短信验证码重置密码）
 * @param {*} datas 手机号 新密码 验证码
 */
export const findPWDBySMS = (datas) => _axios(
  generateUrl(usercenter, 'findPWDBySMS'),
  ({ ...datas })
)
/**
 *验证发送的手机验证码是否正确
 * @param {*} datas.telNo 手机号码
 * @param {*} datas.smsCode 验证码
 */
export const validateSmsCode = (datas) => _axios(
  generateUrl(usercenter, 'validateSmsCode'),
  { ...datas }
)
