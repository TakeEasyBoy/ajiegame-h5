const Browser = () => {
  var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf('Opera') > -1 // 判断是否Opera浏览器
  // var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera //判断是否IE浏览器
  var isIE = window.ActiveXObject || 'ActiveXObject' in window
  // var isEdge = userAgent.indexOf('Windows NT 6.1 Trident/7.0') > -1 && !isIE //判断是否IE的Edge浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 // 判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf('Firefox') > -1 // 判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1 // 判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf('Chrome') > -1 &&
    userAgent.indexOf('Safari') > -1 &&
    !isEdge // 判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+)')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (userAgent.indexOf('MSIE 6.0') !== -1) {
      return 'SBIE6'
    } else if (fIEVersion === 7) {
      return 'SBIE7'
    } else if (fIEVersion === 8) {
      return 'SBIE8'
    } else if (fIEVersion === 9) {
      return 'SBIE9'
    } else if (fIEVersion === 10) {
      return 'SB10'
    } else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
      return 'SB11'
    } else {
      return 'SBIE0'
    } // IE版本过低
  } // isIE end

  if (isFF) {
    return 'FF'
  }
  if (isOpera) {
    return 'Opera'
  }
  if (isSafari) {
    return 'Safari'
  }
  if (isChrome) {
    return 'Chrome'
  }
  if (isEdge) {
    return 'Edge'
  }
}
function generateUrl() {
  const fatUrl = 'https://bank-fat.lhjksaas.com'
  const devUrl = 'http://172.16.1.62:9527'
  const proUrl = 'https://bank.lhjksaas.com'
  const sitUrl = 'https://bank.test.lhjksaas.com'
  // sit 和 dev 是相同的环境
  const actions = new Map([
    ['prod', () => proUrl],
    ['fat', () => fatUrl],
    ['dev', () => devUrl],
    ['sit', () => sitUrl],
    ['defalut', () => devUrl]
  ])
  const action = actions.get(process.env.ENV_CONFIG) || actions.get('defalut')
  return action.call(this)
}
if (Browser().indexOf('IE') >= 0) {
  window.location.href = `${generateUrl()}/browser.html`
}
