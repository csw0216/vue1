<script setup>
// 组件内引用axios
import axios from "axios"
import { ref, onMounted } from "vue"
import qs from "querystring"  // 需要导入qs模块
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
onMounted = function(){
  axios({
    method: "get",
    // url: "https://www.bilibili.com/video/BV1oz421q7BB?spm_id_from=333.788.player.switch&vd_source=e337862a9007fce96df85141f8e7c90c&p=130",
    url: "https://www.bilibili.com/video/BV1oz421q7BB",
    params: {  // GET请求参数应该放在params中
      spm_id_from: "333.788.player.switch",
      vd_source: "e337862a9007fce96df85141f8e7c90c",
      p: 130
    }
  }).then(res => {
    console.log(res.data)
  });
  axios({
    method: "post",
    // url: "https://www.bilibili.com/video/BV1oz421q7BB?spm_id_from=333.788.player.switch&vd_source=e337862a9007fce96df85141f8e7c90c&p=130",
    url: "https://www.bilibili.com/video/BV1oz421q7BB",
    params: {  // GET请求参数应该放在params中
      spm_id_from: "333.788.player.switch",
      vd_source: "e337862a9007fce96df85141f8e7c90c",
      p: 130
    },
    // 这里要提前安装依赖，npm install --save querystring 才能使用转换参数格式 qs.stringify
    // 接收参数的方式不是对象而是字符串
    data:qs.stringify({
      user_id:"csw@qq.com",
      password:"csw",
      code:"dsfgbvdfb"
    })
  }).then(res => {
    console.log(res.data)
  }).catch(error => {
    console.error("请求失败:", error)
  })
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
