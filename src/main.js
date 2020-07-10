// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI, { Backtop ,Pagination} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import moment from 'moment';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(Backtop.name,Backtop);
Vue.component(Pagination.name,Pagination);  
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    render: h => h(App),
    template: '<App/>'
})