/**
 *
 * @param {$type Number} num
 */
const transNum = function transNum(num) {
  let newStr = ''
  if (isNaN(parseInt(num))) {
    return num
  }
  const numArr = num.toString().split('.')
  const integer = numArr[0]
  const floatpart = numArr[1]
  const length = integer.length
  if (length > 3) {
    integer.split('').reverse().forEach((ele, index) => {
      newStr += ele
      if ((index + 1) % 3 === 0 && length !== index + 1) {
        newStr += ','
      }
    })
    return floatpart === undefined ? newStr.split('').reverse().join('') : newStr.split('').reverse().join('') + '.' + floatpart
  }
  return num
}

/**
 * 对数字进行转换 包括单位(亿,万),数字过千＋ ","
 * @param num :number 需要转换的数字
 * @param showUnit:boolean 是否显示单位
 * @returns newData 处理过的数
 */

const transNum2Str = (num, showUnit) => {
  const srtNum = Math.round(num).toString()
  let newData = ''
  if (srtNum.length > 5) {
    const newNum = ((srtNum) / 10000).toFixed(2)
    newData = showUnit ? transNum(newNum) + '亿' : transNum(newNum)
  } else {
    newData = showUnit ? transNum(num) + '万' : transNum(num)
  }
  return newData
}

/**
 * 函数节流
 * @param {method} 传入需要节流的方法
 * @param {context} 传入函数运行的上下文环境
 * @param {time}  传入节流的时间,默认100
 */
const throttle = (method, context, time = 100, argument = []) => {
  clearTimeout(method.tId)
  method.tId = setTimeout(() => {
    method.apply(context, [argument])
  }, time)
}

/**
 * @function: 时效管理
 * @param {expire} 过期日期 合适要求 'xxxx-xx-xx' 'xxxx/xx/xx'
 * x > 60 green
 * 30 < x <60 yellow
 * x < 30 red
 * 采用服务端返回的时间戳,默认使用用户的时间戳
 * @returns {expire:num ,color:''}
 */
const expireTime = (expiretime, serverTime = new Date().getTime()) => {
  // console.log(expiretime)
  const colorArr = ['green', 'red', '#ffbb00']
  let color = ''
  if (expiretime === undefined || expiretime === null || expiretime === '') return { expire: '-', color: 'red' }
  const expireSecend = new Date(expiretime).getTime()
  const originSecend = serverTime
  const expire = Math.ceil((expireSecend - originSecend) / 1000 / 60 / 60 / 24)
  color = expire <= 30 ? colorArr[1] : (expire > 60 ? colorArr[0] : colorArr[2])
  if (isNaN(expire) || expire <= 0) {
    // console.log({ expire: '已过期', color: 'red' }, expiretime)
    return { expire: '已过期', color: 'red' }
  }
  // console.log({ expire: `还有  ${expire}  天`, color }, expiretime)
  return { expire: `还有  ${expire}  天`, color }
}
// test func
// console.log(expireTime('2018-11-6'))
/**
 * 金额转换
 * @param {number} amount 金额 后端只存分,需要转成分
 * @param {*} towhat 转成什么单位
 */
const tranmin2higer = (amounts, towhat = 'wan') => {
  const amount = parseFloat(amounts)
  if (isNaN(amount)) {
    return NaN
  }
  switch (towhat) {
    case 'yuan':
      return amount * 100
    case 'wan':
      return amount * 1000000
    case 'yi':
      return amount * 10000000000
  }
}
/**
* 金额转换
 * @param {number} amount 金额 后端只存分,需要转成分
 * @param {*} towhat 转成什么单位
 */
const trant2lower = (amounts, towhat = 'wan') => {
  const amount = parseInt(amounts)
  if (amounts === null || amounts === '' || isNaN(amount)) {
    return '-'
  }
  switch (towhat) {
    case 'yuan':
      return (amount / 100).toFixed(2)
    case 'wan':
      return (amount / 1000000).toFixed(2)
    case 'yi':
      return (amount / 10000000000).toFixed(2)
  }
}
export const commonMethods = {
  expireTime,
  throttle,
  transNum,
  transNum2Str,
  tranmin2higer,
  trant2lower
}
