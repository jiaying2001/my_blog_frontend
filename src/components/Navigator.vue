<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
    <el-menu
        :default-active="activeIndex"
        id="navigator"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item index="0">
        <router-link to="/">
          Joye
        </router-link>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <router-link to="/post">
          Blog
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/dev-timeline">
          Dev Timeline
        </router-link>
      </el-menu-item>
    </el-menu>
  </template>



<style scoped>
  .flex-grow {
    flex-grow: 1;
  }

  #navigator{
    height: 1cm;
  }
</style>
