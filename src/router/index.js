import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Destination from '@/views/Destination'
import Travel from '@/views/Travel'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/travel',
      name: 'Travel',
      component:Travel
    },
  ]
})
