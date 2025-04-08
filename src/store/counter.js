// pinia API 的基本用法

// Store(如 Pinia) 是一个保存状态和业务逻辑的实体，
// 它并不与你的组件树绑定。换句话说，它承载着全局状态。
// 它有点像一个永远存在的组件，每个组件都可以读取和写入它。

// 它有三个概念，state、getter 和 action，
// 我们可以假设这些概念相当于组件中的 data、 computed 和 methods。

// 创建一个store
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})