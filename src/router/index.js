import Vue from 'vue'
import Router from 'vue-router'
import Helloword from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import aboutus from '@/components/aboutus'
import curriculums from '@/components/curriculums'
import famousteacher from '@/components/famousteacher'
import elegantdisplay from '@/components/elegantdisplay'
import changePassword from '@/components/changePassword'
import xialingying from '@/components/xialingying'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Helloword
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component:aboutus
    },
    {
      path: '/curriculums',
      name: 'curriculums',
      component:curriculums
    },
    {
      path: '/famousteacher',
      name: 'famousteacher',
      component:famousteacher
    },
    {
      path: '/elegantdisplay',
      name: 'elegantdisplay',
      component:elegantdisplay
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component:changePassword
    },
    {
      path: '/xialingying',
      name: 'xialingying',
      component:xialingying
    }
    
  ]
})
