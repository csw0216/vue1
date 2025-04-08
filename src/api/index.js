// 把所有网络请求的方法都引入
import axios from "../utils/request"
import path from "./path"


const api = {
    // 网络请求方案
    // 访问这个方法就可以取得网络请求的结果，在组件当中使用，我在thewelcome.vue中举例说明使用方法
    getPath() {
        return axios.get(path.baseURL + path.url);
    }
    // 可以添加多个方法， 用于获取各种数据
}


export default api;