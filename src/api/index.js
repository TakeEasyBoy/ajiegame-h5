import axios from '../configs/http'

export const test = () => axios({
  method: 'post',
  url: '/user/login'
})
