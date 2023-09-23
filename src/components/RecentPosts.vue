<script setup>
  import {getLatestNPostsByType} from "@/api/post";
  import {onBeforeMount, ref} from "vue";
  import Post from "@/components/PostCover.vue";

  const posts = ref({});
  const NUMBER_OF_POSTS = 3;

  onBeforeMount(()=>{
    getLatestNPostsByType("LIFE", NUMBER_OF_POSTS).then((response)=>{
      posts.value = response.data;
    });
  });
</script>

<template>
  <article v-for="post in posts">
    <Post :post="post"/>
  </article>
</template>

<style scoped>

</style>