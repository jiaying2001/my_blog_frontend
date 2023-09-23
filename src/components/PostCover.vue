<script setup>
import {marked} from "marked";


  const props = defineProps([
      'post'
  ]);


</script>

<template>
  <RouterLink :to="'/post/' + post.id">
    <el-card class="box-card" :shadow="'never'">
      <template #header>
        <header class="card-header">
          <header>{{post.title}}</header>
          <footer>阅读量：{{post.read_vol}}</footer>
        </header>
      </template>
      <main v-html=[[post.content.substring(0,50)]] />
      <footer class="metadata">
        {{post.publish_date}}
      </footer>
    </el-card>
  </RouterLink>
</template>

<style scoped>
  .box-card {
    height: 5cm;
  }
</style>