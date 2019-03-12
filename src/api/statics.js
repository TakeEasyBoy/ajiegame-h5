import { generateUrl, generateBody, _axios } from './common'
import { getBankId } from '@/utils/auth'
const caseModle = 'case'
/**
 *
 * @param {string} userID 用户ID
 * @param {string} groupID
 */
export const bankUserTotal = (userID, groupID) => _axios(
  generateUrl(caseModle, 'case/statistics/bankUserTotal'),
  generateBody({ userID, groupID })
)
/**
 * 案件统计 - 案件各状态总数和总不良金额
 */
export const BankWebTotal = () => _axios(
  generateUrl(caseModle, 'statistics/bankWebTotal'),
  generateBody()
)
/**
 * 案件统计 - 银行WEB端 - 按年统计 的不良金额
 */
export const bankWebAmountSumMonth = (currentYear) => _axios(
  generateUrl(caseModle, 'statistics/bankWebAmountSumMonth'),
  generateBody({ year: currentYear })
)
/**
 * 案件统计 - 获取年份
 */
export const getStatYearList = () => _axios(
  generateUrl(caseModle, 'statistics/getStatYearList'),
  generateBody({ bankID: getBankId() })
)
