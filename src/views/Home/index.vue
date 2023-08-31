<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import tableData from '@/components/tableData.vue'
import helloJsx from '@/components/helloJsx.jsx'
import {getHomeInfo} from '@/api/home'
const getInfo = async ()=>{
 const data = await getHomeInfo()
 console.log(data)
}
onMounted(() => {
  getInfo()
})
</script>

<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="@/assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <helloJsx />
  <el-button>按钮</el-button>
  <tableData />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
