import './assets/main.css'

import { createApp } from 'vue'

// 状态管理库pinia导入
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 全局方式引用axios 
import axios from "axios"
// 引入icons文件
import elementIcon from "./plugins/icons"

// 创建一个 pinia 实例 (根 store) 并将其传递给应用
const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$axios = axios

//将 路由器实例 注册为插件 use() 需要在 mount() 之前调用。
// 它的职责包括：

// 全局注册 RouterView 和 RouterLink 组件。
// 添加全局 $router 和 $route 属性。
// 启用 useRouter() 和 useRoute() 组合式函数。
// 触发路由器解析初始路由。

app.use(elementIcon)

app.use(pinia)
app.use(router)

app.mount('#app')

// 在组件中调用
this.$axios