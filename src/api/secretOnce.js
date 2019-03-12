import { generateUrl, _axios } from './common'
/**
 * 一次一密接口
 */
export const getRamdomkey = () => _axios(
  generateUrl('ems', 'getRandomKey'),
  { keyIndex: '' }
)
