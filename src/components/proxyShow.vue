<template>
  <div class="hello">
    <h3>跨域解决方案</h3>
    </div>
</template>

<script setup>

import axios from "axios"

mounted(()=>{
    axios.get("url")
    .then(res=>{
        console.log(res.data);
    })
})

</script>