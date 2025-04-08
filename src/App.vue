<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

defineProps({
  msg: {
    type: String,
    required: true,
  },
  zIndex: 3000,
  size: 'small',
});
      

</script>

<template>
  <!-- 在这个 template 中使用了两个由 Vue Router 提供的组件: RouterLink 和 RouterView。 -->

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>

        <!-- 不同于常规的 <a> 标签，我们使用组件 RouterLink 来创建链接。
          这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，
          处理 URL 的生成、编码和其他功能。 -->

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <!-- 按需引入 -->
    <el-config-provider :size="size" :z-index="zIndex">
      <app />
    </el-config-provider>

    <!-- 使用图标 -->
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
  </header>


  <!-- RouterView 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径对应的路由组件。
  也就是路由的显式入口
  它不一定要在 App.vue 中，你可以把它放在任何地方，
  但它需要在某处被导入，否则 Vue Router就不会渲染任何东西。 -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
