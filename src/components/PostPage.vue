<script setup>
import {ref} from "vue";
import {countPosts, getPosts} from "@/api/post";
import InfiniteScrollPostContainer from "@/components/InfiniteScrollPostContainer.vue";


  // Environment Configuration
  const POST_TYPE = "LIFE";
  // life类型的帖子未分类，因此默认为1
  const CATEGORY_ID = 1;

  const posts = ref(null);
  let postsCount = ref(0);

  loadAndCountPosts(3);
  async function loadAndCountPosts(quantity) {
    console.log(quantity);
    setTimeout(() =>{console.log("i am sleeping!!");}, 3000);

    countPosts(POST_TYPE, CATEGORY_ID).then((response) => {
      postsCount.value = response.data;
    });
     getPosts(POST_TYPE,CATEGORY_ID, quantity).then((response) => {
        posts.value = response.data;
    });
     return "ok";
  }
</script>

<template>
  <infiniteScrollPostContainer v-if="posts" :posts="posts" :postsCount="postsCount" :loadAndCountPosts="loadAndCountPosts"/>
</template>

<style scoped>
</style>