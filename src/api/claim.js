import { generateUrl, generateBody, _axios } from './common'
import { getBankId } from '@/utils/auth'
// const userModule = 'ucs'
const caseModle = 'case'
/**
 * 获取
 * @param {*} datas
 */
export const getCaseLists = (datas) => _axios(
  generateUrl(caseModle, 'case/web/getCaseListInfo'),
  generateBody(datas)
)
/**
 * 获取结案库案件列表
 * @param {object} datas
 * @param {string} datas.customerName 可不填,支持客户名称模糊搜索
 * @param {string} datas.page
 * @param {string} datas.pageSize
 */
export const getFinishedCaseList = (datas) => _axios(
  generateUrl(caseModle, 'case/web/getFinishedCaseList'),
  generateBody(datas)
)
/**
 * 根据案件ID获取案件基本信息
 * @param {number} caseID 案件ID
 */
export const getCaseInfo = (caseID) => _axios(
  generateUrl(caseModle, 'case/getCaseInfo'),
  generateBody({ caseID })
)
/**
 * 分案
 * @param {array} datas.caseIDList 案件ID列表
 * @param {number} datas.groupID 银行小组ID
 * @param {number} datas.firmID 律所ID
 * @param {number} datas.lawyerID 律师ID
 */
export const addProxyInfo = (datas) => _axios(
  generateUrl(caseModle, 'proxy/addProxyInfo'),
  generateBody({ ...datas, bankID: getBankId() })
)
/**
 * 重新分案
 * @param {array} datas.caseIDList 案件ID列表
 * @param {number} datas.groupID 银行小组ID
 * @param {number} datas.firmID 律所ID
 * @param {number} datas.lawyerID 律师ID
 */
export const assignCaseAgain = (datas) => _axios(
  generateUrl(caseModle, 'proxy/assignCaseAgain'),
  generateBody({ ...datas, bankID: getBankId() })
)
/**
 * 根据案件ID获取案件委托信息
 * @param {number} caseID 案件ID
 */
export const getProxyInfoByCasesID = (caseID) => _axios(
  generateUrl(caseModle, 'proxy/web/getProxyInfoByCasesID'),
  generateBody({ caseID })
)
/**
 * 根据id删除案件
 * @param {number} caseID
 */
export const deleteCase = (caseID) => _axios(
  generateUrl(caseModle, 'case/deleteCase'),
  generateBody({ caseID })
)
/**
 * 根据案件ID获取案件的其他信息
 * @param {number} caseID 案件ID
 */
export const getCaseExtendInfo = (caseID) => _axios(
  generateUrl(caseModle, 'case/getCaseExtendInfo'),
  generateBody({ caseID })
)
/**
 * 获取案件阶段列表
 * @param {number} caseID 案件ID
 */
export const getCaseStageListByCaseID = (caseID) => _axios(
  generateUrl(caseModle, 'case/getCaseStageListByCaseID'),
  generateBody({ caseID })
)
/**
 * 获取审理信息
 * @param {number} trialID 审理ID
 */
export const getCaseTrialListByCaseID = (caseID) => _axios(
  generateUrl(caseModle, 'trial/getCaseTrialListByCaseID'),
  generateBody({ caseID })
)
/**
 * 根据案件执行阶段ID获取案件执行信息
 * @param {number} executeID
 */
export const getExecuteByID = (executeID, caseID) => _axios(
  generateUrl(caseModle, 'execute/getExecuteByID'),
  generateBody({ executeID, caseID })
)
/**
 * 根据案件ID获取执行列表
 * @param {*} caseID 案件ID
 */
export const getCaseExecuteListByCaseID = (caseID) => _axios(
  generateUrl(caseModle, 'execute/getCaseExecuteListByCaseID'),
  generateBody({ caseID })
)
/**
 * huo获取查封财产类型
 * @param {number} caseID 案件ID
 * 01 动产 02不动产 03 银行财产
 */
export const getAssetsListWithType = (caseID) => _axios(
  generateUrl(caseModle, 'assets/getAssetsListWithType'),
  generateBody({ caseID })
)
/**
 * 获取全部查封财产列表
 * @param {number} caseID 案件ID
 */
export const getAssetsList = (caseID) => _axios(
  generateUrl(caseModle, 'assets/getAssetsList'),
  generateBody({ caseID })
)
/**
 * 根据资产ID获取财产信息
 * @param {*} caseID 案件ID
 */
export const getAssetsByID = (assetsID, caseID) => _axios(
  generateUrl(caseModle, 'assets/getAssetsByID'),
  generateBody({ assetsID, caseID })
)
/**
 * 获取其他财产信息列表
 * @param {number} caseID 案件ID
 */
export const getOtherAssetsList = (caseID) => _axios(
  generateUrl(caseModle, 'assets/getOtherAssetsList'),
  generateBody({ caseID })
)

/**
 * 获取记录列表
 * @param {obj} datas
 * @param {number} datas.caseID
 * @param {string} datas.page
 * @param {string} datas.pageSize
 */
export const getCaseRecordList = (datas) => _axios(
  generateUrl(caseModle, 'record/web/getCaseRecordList'),
  generateBody({ ...datas })
)
/**
 * 获取附件列表
 * @param {obj} datas
 * @param {number} datas.caseID
 * @param {string} datas.page
 * @param {string} datas.pageSize
 */
export const getAttachmentList = (datas) => _axios(
  generateUrl(caseModle, 'attachment/web/getAttachmentList'),
  generateBody({ ...datas })
)
/**
 * 获取文件下载URL
 * @param {array} fileRecordID 文件ID
 * @param {number} styleID 文件类型
 */
export const getDownloadUrl = (fileRecordID, styleID = 0) => _axios(
  generateUrl('fms', 'getDownloadUrl'),
  generateBody({ fileRecordID, styleID })
)
