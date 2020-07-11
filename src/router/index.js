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
import Home from '../views/Home.vue'
import HomeNav from '../views/HomeNav.vue'
import HomeAside from '../views/HomeAside.vue'
import HomeWrapper from '../views/HomeWrapper.vue'
import HomeNew from '../views/HomeNew.vue'
import HomeHot from '../views/HomeHot.vue'
import Ticket from '@/views/Ticket'
import Oneway from '@/components/ticket/Oneway'
import Twoway from '@/components/ticket/Twoway'
import Hotel from '@/views/Hotel'
import Free from '../views/Free'
import HomeJourney from '@/components/HomeJourney.vue'
import HomeTicket from '@/components/HomeTicket.vue'
import HomeDestination from '@/components/HomeDestination.vue'
import HomeHotel from '@/components/HomeHotel.vue'
import HomeAll from '@/components/HomeAll.vue'
import HomeSearch from '@/components/HomeSearch.vue'
Vue.use(Router)

export default new Router({
   
    routes: [{
            path: '',
            redirect: '/home'
        },
        
        {
            path: '/home',
            components: {
                default: Home,
                HomeNav,
                HomeAside,
                HomeWrapper,
                
            },
            children: [{
                path: '',
                redirect: 'hot'
            },
            {
                path: 'hot',
                component: HomeHot
            },
            {
                path: 'new',
                component: HomeNew
            },
          
           
            ]
        },
        {
            path: '/homeSearch',
            name: 'HomeSearch',
            component: HomeSearch
        },
        {
            path: "/ticket",
            name: 'Ticket',
            //redirect: 'oneway', //
            component: Ticket,
            // children: [{
            //     path: "oneway",
            //     component: Oneway,

            // }, {
            //     path: "twoway",
            //     component: Twoway
            // }]

        },
       
       


            // }, {
            //     path: "twoway",
            //     component: Twoway
            // }]

    
        {
            path: "/hotel",
            name: 'Hotel',
            component: Hotel,
        },
        {
            path: '/destination',
            name: 'Destination',
            component: Destination
        },

        {
            path: '/free',
            name: 'Free',
            component: Free
        },
        {
            path: '/strategy',
            name: 'Strategy',
            component: Strategy,
            // children: [{
            //     path: "/strategy/free",
            //     component: Free
            // },]
        },
        {
            path: '/travel',
            component: Travel,
            children: [{
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
                redirect: "/travel/sales"
            }
            ]
        },
    ]
})
