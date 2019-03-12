import { generateUrl, generateBody, _axios } from './common'
import { getBankId } from '@/utils/auth'
const firmmodule = 'firm'
/**
 * 获取合作律所列表
 * @param {object} data 分页数据
 * @param {number} data.page
 * @param {number} data.pageSize
 */
export const getfirmListByBankID = (data) => _axios(
  generateUrl(firmmodule, 'getfirmListByBankID'),
  generateBody({ ...data })
)
/**
 * 邀请律所
 * @param {*} data
 *  "cooperationEndDate": "string",
    "firmName": "string",
    "licenceNo": "string",
    "maxCaseAmount": 0,
    "minCaseAmount": 0,
    "siteCity": "string",
    "siteProvince": "string",
    "telNo": "string",
    "unlimitedCaseAmount": 0
 */
export const inviteFirmRegister = (data) => _axios(
  generateUrl(firmmodule, 'inviteFirmRegister'),
  generateBody({ ...data, bankID: getBankId() })
)
/**
 * 根据邀请码获取银行名称（H5）
 * @param {*} inviteCode 邀请码
 */
export const getBankNameByInviteCode = (inviteCode) => _axios(
  generateUrl(firmmodule, 'getBankNameByInviteCode'),
  { inviteCode }
)
/**
 * 确认律所注册
 * @param {obj} data 对象
 * @param {string} data.inviteCode 邀请码
 * @param {string} data.firmName 律所名称
 * @param {string} data.licenceNo 执业许可证号
 */
export const confirmFirmRegister = (data) => _axios(
  generateUrl(firmmodule, 'confirmFirmRegister'),
  ({ ...data })
)
/**
 * 银行管理员重复邀请律所接口
 * @param {*} firmID 律所ID
 */
export const reInviteFirm = (firmID) => _axios(
  generateUrl(firmmodule, 'reInviteFirm'),
  generateBody({ firmID })
)
/**
 * 删除律所(解约)
 * @param {string} firmID 律所ID
 */
export const deleteBankFirmRelationship = (firmID) => _axios(
  generateUrl(firmmodule, 'deleteBankFirmRelationship'),
  generateBody({ firmID })
)
/**
 * 编辑律所合作信息
 * @param {obj} data 对象
 * @param {number} data.firmID
 * @param {string} data.cooperationState 合作状态 3：合作中，4：已解约
 * @param {string} data.cooperationEndDate
 * @param {string} data.minCaseAmount 最小案件承接金额范围（分）
 * @param {string} data.maxCaseAmount 最大案件承接金额范围（分） 1：有限，2：无限；当为1时最小案件金额及最大案件金额数额无效
 */
export const changeFirmCooperation = (data) => _axios(
  generateUrl(firmmodule, 'changeFirmCooperation'),
  generateBody({ ...data, bankID: getBankId() })
)
/**
 * 律所账号变更
 * @param {string} data.telNo 手机号
 * @param {number} data.firmID 律所ID
 */
export const changeFirmAccount = (data) => _axios(
  generateUrl(firmmodule, 'changeFirmAccount'),
  generateBody({ ...data })
)
/**
 * 获取与银行处于合作中的律所信息（分案律所下拉列表接口）
 */
export const getCooperationFirmList = () => _axios(
  generateUrl(firmmodule, 'getCooperationFirmList'),
  generateBody()
)
/**
 * 根据律所ID获取该律所下处于正常状态下的律师信息（分案律师下拉列表接口）
 * @param {number} firmID
 */
export const getNormalFirmUserByFirmID = (firmID) => _axios(
  generateUrl(firmmodule, 'getNormalFirmUserByFirmID'),
  generateBody({ firmID })
)

/**
 * 根据tel获取律所信息
 * @param {number} telNo
 */
export const inviteFirmCheckTelNo = (telNo) => _axios(
  generateUrl(firmmodule, 'inviteFirmCheckTelNo'),
  generateBody({ telNo })
)
