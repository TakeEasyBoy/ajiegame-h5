import axios from '../configs/http'
/**
 * 文件上传
 * @param {object} params formData对象
 */
export const uploadFile = (params, config) => axios.post('/api/import/v1/importCase', params, config)
/**
 * 债权导出
 * @param {string} data.customerName
 * @param {string} data.customerType
 * @param {string} data.endFinishTime
 * @param {string} data.startFinishTime
 * @param {number} data.minBadBalance
 * @param {number} data.maxBadBalance
 */
export const exportFile = (params) => axios.post('api/import/v1/exportCase', params, { responseType: 'blob' })
/**
 * 债权导出
 * @param {string} data.customerName
 * @param {string} data.customerType
 * @param {string} data.endFinishTime
 * @param {string} data.startFinishTime
 * @param {number} data.minBadBalance
 * @param {number} data.maxBadBalance
 * @param {number} data.lawsuitStage
 * @param {number} data.filingSituation
 * @param {number} data.caseStatus
 */
export const exportUnfinishedCase = (params) => axios.post('api/import/v1/exportUnfinishedCase', params, { responseType: 'blob' })
