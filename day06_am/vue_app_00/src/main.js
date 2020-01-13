import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 5-16行删掉
// 1.引入mint-ui组件库
import MintUI from 'mint-ui'
// 2.引入mint-ui样式
import "mint-ui/lib/style.css"
// 3.注册
Vue.use(MintUI);

// 引入字体图标库
import "./font/iconfont.css"

// (1)引入axios库
import axios from "axios"
// (2)设置属性发送ajax请求时保存session信息
axios.defaults.withCredentials=true
// (3)设置ajax请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
// (4)将axios注册Vue实例
Vue.prototype.axios = axios












new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
