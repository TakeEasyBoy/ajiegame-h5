import axios from '../configs/http'
const c_module = 'fms'
export const uploadImage = (params, config) => axios.post(`/api/${c_module}/v2/uploadImage`, params, config)
