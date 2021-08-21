import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin'
import Home from '@/components/MyHome'
import user from '@/components/menus/MyUsers'
import Good from '@/components/menus/MyGoods'
import Order from '@/components/menus/MyOrders'
import Right from  '@/components/menus/MyRights'
import Setting from '@/components/menus/MySettings'
import Userdetail from '@/components/user/MyUserDetail'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path:'/',redirect:'/login'
    },
   {
     path:'/login',component:Login
   },
   {
     path:'/home',component:Home,
     redirect:'/home/user',
// 子路由前面不能加/
     children:[
       {path:'user',component:user},
       {path:'right',component:Right},
       {path:'good',component:Good},
       {path:'order',component:Order},
       {path:'setting',comments:Setting},
      //  书写格式要注意    开启路由参数
       {path:'userdetail/:id',component:Userdetail,props:true}
     ]
     
   }
  ]
})
// 需要进行登录验证的路由名单
const routerarr=['/home','/home/user','/home/right']
// 全局前置守卫
router.beforeEach(function(to,from,next){
  
  // if(to.path ==='/home'){
  if(routerarr.indexOf(to.path)!==-1){
    const token =localStorage.getItem('token');
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router
