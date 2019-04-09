import Vue from 'vue'
// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'
// Raven.config('http://6657f1c98b0e4d22b6412eeb3bcf66ee@sentry.shijiyunhe.com/3')
//   .addPlugin(RavenVue, Vue)
//   .install()
// import './decetbrowser'
import App from './App'
import router from './router'
import './style/common.scss'
import 'babel-polyfill'
import Cube from 'cube-ui'

Vue.use(Cube)
// import './permission'
import { commonMethods } from './utils/common'
Vue.prototype.$transNum = commonMethods.transNum
Vue.prototype.$transNum2Str = commonMethods.transNum2Str
Vue.prototype.$expireTime = commonMethods.expireTime
Vue.prototype.$tranmin2higer = commonMethods.tranmin2higer
Vue.prototype.$trant2lower = commonMethods.trant2lower
Vue.prototype.$throttle = commonMethods.throttle
Vue.config.productionTip = false
// Vue.config.errorHandler = function(err, vm, info) {
//   Raven.captureException(err)
// }
// process.env.ENV_CONFIG === 'dev' && require('./mock/index.js')
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
