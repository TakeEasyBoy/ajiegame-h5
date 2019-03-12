import axios from '../configs/http'
/**
 * 获取城市列表
 */
export const getCities = () => axios({
  method: 'post',
  url: '/api/website/v1/getCities'
})
