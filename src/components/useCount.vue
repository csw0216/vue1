
<!-- 在组件中使用store -->
<script setup>
import { useCounterStore } from '@/store/counter'

// 创建store实例
const counter = useCounterStore()

counter.count++
// 自动补全！ 
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()
</script>

<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>