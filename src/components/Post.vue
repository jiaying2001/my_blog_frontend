<script setup>
import {marked} from "marked";
import {getPostById} from "@/api/post";
import {ref} from "vue";


const props = defineProps([
  'id'
]);

const post = ref(null);

getPostById(props.id).then((response) => {
  post.value = response.data;
});

</script>

<template>
  <RouterLink to="/1">
    <el-card class="box-card" :shadow="'never'">
      <template #header>
        <header class="card-header">
          <header v-if="post">{{post.title}}</header>
          <footer v-if="post">阅读量：{{post.read_vol}}</footer>
        </header>
      </template>
      <main v-if="post" v-html=[[marked(post.content)]] />
      <footer v-if="post" class="metadata">
        {{post.publish_date}}
      </footer>
    </el-card>
  </RouterLink>
</template>

<style scoped>

</style>