import { getUserID } from '@/utils/auth'
import { generateUrl, _axios, generateBody } from './common'
// const userId = getUserID()
const datas = {
  businessID: 1,
  // userId: getUserID(),
  // deviceToken: `${getUserID()}_01`, // 01 bank 02 firm
  platType: 3,
  platVer: '1.0.0'
}
const rmData = {
  businessID: 1,
  userId: getUserID(),
  deviceToken: `${getUserID()}_01` // 01 bank 02 firm
}
const PCS_MODULE = 'pcs'
/**
 * 注册deviceToken
 */
export const registerDeviceToken = (userid) => _axios(
  generateUrl(PCS_MODULE, 'registerDeviceToken'),
  generateBody({ ...datas, userId: userid, deviceToken: `${userid}_01` })
)
// 移除devicetoken
export const removeDeviceToken = () => _axios(
  generateUrl(PCS_MODULE, 'removeDeviceToken'),
  generateBody(rmData)
)
/**
 * 删除消息
 * @param {list} ids id列表
 */
export const deleteMsg = (ids) => _axios(
  generateUrl(PCS_MODULE, 'web/deleteMsg'),
  generateBody({ ids })
)
/**
 * 查询消息列表
 * @param {string} datas.pageSize
 * @param {string} datas.startPage
 * @param {string} datas.systemCode  系统code:01-银行端，02-律所端
 * @param {string} datas.userId 用户ID
 */
export const msgList = (datas) => _axios(
  generateUrl(PCS_MODULE, 'web/msgList'),
  generateBody({ ...datas })
)
/**
 * 查询未读消息总数
 * @param {string} messageType  1-推送业务消息，2-短信消息，3-推送系统消息
 * @param {number} userId  用户id
 */
export const queryUnReadMsgCount = (messageType, userid) => _axios(
  generateUrl(PCS_MODULE, 'web/queryUnReadMsgCount'),
  generateBody({ messageType, userId: userid })
)
/**
 * 查看某条消息
 * @param {string} msgId
 */
export const viewMsg = (msgId) => _axios(
  generateUrl(PCS_MODULE, 'web/viewMsg'),
  generateBody({ msgId })
)
/**
 * 标记已读
 * @param {Array} ids
 */
export const readedMsg = (ids) => _axios(
  generateUrl(PCS_MODULE, 'web/readedMsg'),
  generateBody({ ids })
)
/**
 * 消息全部已读
 * @param {number} userId
 */
export const readedAllMsg = () => _axios(
  generateUrl(PCS_MODULE, 'web/readedAllMsg'),
  generateBody({ userId: getUserID() })
)
