import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/Index.vue"
import Product from "../views/Product.vue"
import Detail from '../views/Detail.vue'
import Cart from "../views/Cart.vue"
import Order from "../views/Order.vue"
import OrderList from "../views/OrderList.vue"
import Orderconfirm from "../views/Orderconfirm.vue"
import OrderPay from "../views/OrderPay.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    //添加重定向，首页的view显示的就是index
    redirect:"/index",
    children:[
      {
        path:"/index",
        name:"index",
        component:Index,
      },{
        path:"/product/:id",//动态id的路由写法，
        name:"Product",
        component:Product
      },{
        path:'/detail/:id',//商品详情也是动态路由
        name:'Detail',
        component:Detail
      }
    ]
  },{
    path:"/cart",
    name:Cart,
    component:Cart
  },
  {
    path:"/order",
    name:"Order",
    component:Order,
    //归属的子页面不用加/
    children:[
      {
        path:'list',
        name:'Order-List',
        component:OrderList
      },{
        path:'confirm',
        name:'Order-Confirm',
        component:Orderconfirm
      },{
        path:'pay',
        name:"Order-Pay",
        component:OrderPay
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
