import router from './router'
import 'nprogress/nprogress.css' // Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
const NProgress = require('nprogress') // Progress 进度条

// //  定义免鉴权白名单
const whiteLists = ['/login', '/error', '/admin', '/invite', '/reset']

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (to.path.split('/')[1] === 'invite' && to.path.length > 7) {
//     router.push('/invite' + '?' + to.path.split('/')[2])
//     NProgress.done()
//     return
//   }
//   next()
// })
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.length === 0) {
    if (to.fullPath.indexOf('invite') < 0) {
      router.push('/404')
      next()
    } else {
      router.push('/invite' + '?' + to.path.split('/')[2])
      next()
    }
  }
  // 更改title
  if (to.path.indexOf('invite') > 0) {
    document.title = '知案渠道管理系统'
  } else {
    document.title = '知案渠道管理系统：银行端'
  }
  // 注：在移动端一般是不会有token的,但是
  if (getToken()) {
    //
    next()
  } else {
    if (whiteLists.indexOf(to.path) !== -1) {
      NProgress.done()
      console.log('data', to.path)
      next()
    } else if (to.path.split('/')[1] === 'invite' && to.path.length > 7) {
      router.push('/invite' + '?' + to.path.split('/')[2])
      console.log('invite', to.path)
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

// //  路由跳转如果要跳转到页面的顶部，必须要使用下面的方式，让新的页面跳转到页面顶部
router.afterEach((to) => {
  NProgress.done()
  window.scrollTo(0, 0)
})
