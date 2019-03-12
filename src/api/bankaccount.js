import { generateUrl, generateBody, _axios } from './common'
import { getUserID, getBankId } from '@/utils/auth'
const bankmodule = 'bank'
/**
 *
 * @param {string	} datas.groupID
 * @param {string	} datas.roleCode 12组长 13组员
 * @param {string	} datas.userID
 */
export const addBankUserAccount = (datas) => _axios(
  generateUrl(bankmodule, 'addBankUserAccount'),
  generateBody({ bankID: getBankId(), ...datas })
)
/**
 * 获取银行用户列表
 * @param {string} datas.bankID
 * @param {string} datas.page
 * @param {string} datas.pageSize
 */
export const getBankUserList = (datas) => _axios(
  generateUrl(bankmodule, 'getBankUserList'),
  generateBody({ bankID: getBankId(), ...datas })
)
/**
 * 获取小组列表
 * @param {string} datas.bankID
 * @param {string} datas.page
 * @param {string} datas.pageSize
 */
export const getBankGroupList = (datas) => _axios(
  generateUrl(bankmodule, 'getBankGroupList'),
  generateBody({ bankID: getBankId(), ...datas })
)
/**
 * 修改银行成员信息
 * @param {string} datas.userID
 * @param {string} datas.groupID 12为组长,13为组员
 * @param {string} datas.roleCode
 */
export const modifyBankUserInfo = (datas) => _axios(
  generateUrl(bankmodule, 'modifyBankUserInfo', 'v2'),
  generateBody({ bankID: getBankId(), ...datas })
)
/**
 * 修改银行成员状态信息
 * @param {string} datas.userID
 * @param {string} datas.groupID 12为组长,13为组员
 * @param {string} datas.userStatus
 */
export const modifyBankUserStatus = (datas) => _axios(
  generateUrl(bankmodule, 'modifyBankUserStatus'),
  generateBody({ bankID: getBankId(), ...datas })
)
/**
 * 新增银行小组
 * @param {string} datas.bankID
 * @param {string} datas.groupName  小组名称
 */
export const addBankGroup = (groupName) => _axios(
  generateUrl(bankmodule, 'addBankGroup'),
  generateBody({ bankID: getBankId(), groupName })
)
/**
 * 修改银行小组信息
 * @param {object} datas
 * @param {string} datas.groupID
 * @param {string} datas.groupName
 * @param {string} datas.userID
 * @param {string} datas.bankID
 */
export const modifyBankGroup = (datas) => _axios(
  generateUrl(bankmodule, 'modifyBankGroup'),
  generateBody({ bankID: getBankId(), userID: getUserID(), ...datas })
)
/**
 * 删除银行小组
 * @param {string} groupID
 */
export const deleteBankGroup = (groupID) => _axios(
  generateUrl(bankmodule, 'deleteBankGroup'),
  generateBody({ groupID: groupID })
)
/**
 * 删除银行用户的账户
 * @param {number} userID 用户ID
 */
export const deleteBankUserAccount = (userID) => _axios(
  generateUrl(bankmodule, 'deleteBankUserAccount'),
  generateBody({ userID })
)
/**
 * 获取银行小组成员列表
 * @param {string} groupID
 */
export const getGroupUserList = (groupID) => _axios(
  generateUrl(bankmodule, 'getGroupUserList'),
  generateBody({ groupID })
)
/**
 * 获取银行小组下拉列表
 * @param {string} bankID
 */
export const getBankGroups = () => _axios(
  generateUrl(bankmodule, 'getBankGroups'),
  generateBody({ bankID: getBankId() })
)
/**
 * 获取小组组长信息
 * @param {number} groupID 小组ID
 */
export const getGroupLeaderID = (groupID) => _axios(
  generateUrl(bankmodule, 'getGroupLeaderID'),
  generateBody({ groupID })
)
