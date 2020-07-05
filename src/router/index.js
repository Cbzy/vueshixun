import Vue from 'vue'
import Router from 'vue-router'
import Destination from '@/views/Destination'
import Travel from '@/views/Travel'
import Sales from '@/components/travel/Sales'
import TeamTravel from '@/components/travel/TeamTravel'
import Localdeals from '@/components/travel/Localdeals'
import Wf from '@/components/travel/Wf'
import Visa from '@/components/travel/Visa'
import Liner from '@/components/travel/Liner'
import Strategy from '@/views/Strategy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy
    },
    {
      path: '/travel',
      component:Travel,
      children: [
        {
          path: "/travel/sales",
          component: Sales
        },
        {
          path: '/travel/teamtravel',
          component: TeamTravel
        },
        {
          path: '/travel/localdeals',
          component: Localdeals
        },
        {
          path: '/travel/wf',
          component: Wf
        },
        {
          path: '/travel/visa',
          component: Visa
        },
        {
          path: '/travel/liner',
          component: Liner
        },
        {
          path: "",
          redirect:"/travel/sales"
        }
      ]
    },
  ]
})
