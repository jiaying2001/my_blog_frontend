/*
  @param posts 帖子内容
  @Param postsCount 帖子总数

  @Event loadAndCountPosts 刷新帖子和帖子总数
*/

<script setup>
const emit = defineEmits([
  "loadAndCountPosts"
]);

import {ref, computed} from "vue";
import Post from "@/components/PostCover.vue";

const props = defineProps([
    // 帖子内容
    "posts",
    // 帖子数
    "postsCount",
    "loadAndCountPosts"
]);
let numberOfPosts = 3;
const loading = ref(false);
const noMore = computed(() => props.posts.length >= props.postsCount)
const disabled = computed(() => loading.value || noMore.value || props.posts.length < 3)

function loadPosts(){
  loading.value = true;
  props.loadAndCountPosts(numberOfPosts);
  console.log("already loaded??");
  loading.value = false;
  numberOfPosts += 2;
}
</script>

<template>
  <el-row>
    <el-col :span="16">
      <ul v-infinite-scroll="loadPosts" :infinite-scroll-disabled="disabled" class="infinite-list" style="overflow: auto">
        <li v-for="post in posts" :key="post" class="infinite-list-item">
          <Post :post="post"/>
        </li>
        <li v-if="loading">Loading...</li>
        <li v-if="noMore">No more</li>
      </ul>
    </el-col>
    <el-col :span="8">
      <!--   右边side   -->
    </el-col>
  </el-row>
</template>

<style scoped>
.infinite-list {
  height: 500px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
//display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>