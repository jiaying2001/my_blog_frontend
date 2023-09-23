<script setup>
  import Post from "@/components/PostCover.vue";
  import {countPosts, getLatestPostsByCategoryIdAndType, getPosts, getPostsByCategoryId} from "@/api/post";
  import {ref} from "vue";
  import InfiniteScrollPostContainer from "@/components/InfiniteScrollPostContainer.vue";

  defineProps([
      "categoryList"
  ]);

  // 环境配置信息
  const POST_TYPE = "ACADEMIC_NOTE";

  // 一开始加载页面会遇见reading property of null。。。
  const posts = ref(null);
  const postsCount = ref(null);
  const current_category_id = ref(null);

  function renderPosts(category_id) {
    console.log(category_id);
    current_category_id.value = category_id;
    loadAndCountPosts(3);
  }

  function loadAndCountPosts(quantity) {
    getPosts(POST_TYPE, current_category_id.value, quantity).then((response) => {
      posts.value =  response.data;
    });
    countPosts(POST_TYPE, current_category_id.value).then((response) => {
      postsCount.value = response.data;
    });
  }
</script>

<template>
  <el-row>
    <el-col :span="4">
      <el-menu class="horizontal-menu">
        <el-menu-item v-if="categoryList" v-for="category in categoryList" @click="renderPosts(category.id)">
          {{category.name}}
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <InfiniteScrollPostContainer v-if="posts" :posts="posts" :postsCount="postsCount" :loadAndCountPosts="loadAndCountPosts" />
    </el-col>
  </el-row>
</template>

<style scoped>

</style>