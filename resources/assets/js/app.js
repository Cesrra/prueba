require('./bootstrap')
window.Vue = require('vue')

import { BootstrapVue } from 'bootstrap-vue'
import App from './components/App'
import ProductsTable from './components/ProductsTable'
import AddProduct from './components/AddProduct'
import UpdateState from './components/UpdateState'
import SearchProduct from './components/SearchProduct'
import store from './store'

Vue.use(BootstrapVue)

Vue.component('app', App)
Vue.component('products-table', ProductsTable)
Vue.component('add-product', AddProduct)
Vue.component('update-state', UpdateState)
Vue.component('search-product', SearchProduct)

const app = new Vue({
    el: '#app',
    store
});
