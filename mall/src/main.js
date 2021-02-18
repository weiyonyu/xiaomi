import Vue from 'vue'
import axios from 'axios'
//vue-axios 意思为将axios挂载到vue身上
import VueAxios from "vue-axios"
import App from './App.vue'
import router from './router'
import store from './store'


//使用mock插件，先定义mock开关方便使用
const mock=false;
if(mock){
  //import预编译加载，require只有执行时候才会加载,为false不会加载
  require('./mock/api');
}
if(mock){
  require('./mock/api');
}
//根据前端的跨域方式做调整
//接口代理
axios.defaults.baseURL='/api';
//超时限定
axios.defaults.timeout=8000; 

//编写拦截器==>对所有的接口请求进行拦截req 返回拦截res

axios.interceptors.response.use(function(response){
  let res=response.data;
  console.log(res);
  if(res.status == 0){
    return res.data
  }else if(res.status==10){
    //this.router.push方式只在vue中使用，js不能使用
    window.location.href="/#/login";
  }else{
    alert(res.msg);
  }
})



//使用axios的中间件
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
