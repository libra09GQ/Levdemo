import Vue from 'vue'
import VueRouter from 'vue-router'


const Home  = ()=>import('../views/home/Home')
const About  = ()=>import('../views/about/About')
const profile  = ()=>import('../views/profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path : '',
    redirect :'/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      title :'首页'
    },
  },
  {
    path: '/About',
    name: 'About',
    meta:{
      title :'关于'
    },
    
    component:About
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{
      title :'我的'
    },  
    component:profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
 // linkActiveClass: 'active'
})

router.beforeEach((to,from,next) => {
  console.log(to);
  
  //document.title = to.matched[0].meta.title,
  next()
})

export default router
