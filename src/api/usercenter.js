/**
 * auther: 黄名超
 * created: 2018-09-17
 * describe: usercenter API
 */
// 用于生成乱七八糟的url,以及将token放进body里面
import { generateUrl, _axios, generateBody } from './common'
import { getFToken } from 'utils/auth'
const BeModule = 'ucs'
/**
 * funcional :注册用户
 * @param {params.name} name //名称,string,最多128字节长度
 * @param {params.telNo} telNo 手机号，string, 标准移动&联通&电信手机号码段
 * @param {params.organizationID} organizationID 所属组织机构代码, string，个人账号有该属性, 目前银行业务不为空
 */
export const registerUser = (params) => _axios(
  generateUrl(BeModule, '/registerUser'),
  params
)
/**
 * 找回密码
 * @param {*} telNo 手机号码
 * @param {*} smsCode 短信验证码
 * @param {*} pwdNew 新密码
 */
export const findPWDBySMS = (telNo, smsCode, pwdNew) => _axios(
  generateUrl(BeModule, 'findPWDBySMS'),
  {
    telNo,
    smsCode,
    pwdNew
  }
)
/**
 * 刷新token
 * @param {*} refreshToken 刷新token
 */
export const refreshToken = () => _axios(
  generateUrl(BeModule, 'refreshToken'),
  { refreshToken: getFToken() }
)

/**
 * 修改用户手机号码
 * @param {*} telNo 电话号码
 * @param {*} userID 用户userID
 */
export const changeUserTelNo = (telNo, userID) => _axios(
  generateUrl(BeModule, 'changeUserTelNo'),
  {
    telNo,
    userID
  }
)
/**
 * 修改用户状态信息
 * @param {string} userID 用户userID
 * @param {number} status 1 正常 2 禁用 3 注销
 */
export const chageUserStatus = (userID, status) => _axios(
  generateUrl(BeModule, 'changeUserStatus'),
  { status, userID }
)

/**
 * 修改用户名称
 * @param {string} userID 用户userID
 * @param {string} name 用户民
 */
export const changeUserName = (userID, name) => _axios(
  generateUrl(BeModule, 'changeUserName'),
  { userID, name }
)
/**
 * 删除用户
 * @param {number} userID
 */
export const deleteUserAccount = (userID) => _axios(
  generateUrl(BeModule, 'deleteUserAccount'),
  generateBody({ userID })
)
/**
 * 获取更新信息
 */
export const getLastVesionByAppid = () => _axios(
  generateUrl('operate', 'getLastVesionByAppid'),
  generateBody({ platformId: 'web_zhian-bank' })
)
