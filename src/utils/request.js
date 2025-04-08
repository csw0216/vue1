// 网络请求封装
import axios from "axios"
import { connected } from "process";
import qs from "querystring" 

// 自定义错误处理函数
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}


// 处理错误
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

// create方法创建自己的网络请求对象
const instance = axios.create({
    // 网络请求的公共配置
    timeout:5000
})

// 拦截器最常用
// 分为两类

// 1.发送数据之前
// 将拦截器添加到axios的自定义实例
// request发送
instance.interceptors.request.use(config=>{
    // Do something before request is sent
    if (config.method === "post") { //对post请求额外做处理,在拦截器里做格式转换
        config.data=qs.stringify(config.data)
    }
    return config;
  }, error=>{
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// response响应
instance.interceptors.response.use(response=>{
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.status===200?Promise.resolve(response):Promise.reject(response);
  }, error=>{
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { response } = error;
    errorHandle(response.status,response.info)
    // return Promise.reject(error);
  });

// 2.请求返回数据之前

export default instance;