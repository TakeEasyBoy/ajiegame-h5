/*
 * @Author: huangmingchao
 * @Date: 2018-09-21 14:08:13
 * @Last Modified by: huangmingchao
 * @Last Modified time: 2018-09-21 17:22:03
 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../components/Home')), 'home')
const Index = r => require.ensure([], () => r(require('../pages/Index')), 'index')
const Login = r => require.ensure([], () => r(require('../pages/login')), 'login') //  用户登陆

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/index',
    component: Home,
    name: 'home',
    children: [
      {
        path: '/index',
        component: Index,
        name: 'index',
        meta: {
          role: ['1']
        }
      }
    ]
  }]
})
