<script setup>
  const props = defineProps([
      "user_id"
  ]);

  import {ref} from "vue";
  import {getFirstLevelCategoryList, getSecondLevelCategoryList} from "@/api/category";
  import NotesPage from "@/components/NotesPage.vue";

  const categoryList = ref(null);

  getFirstLevelCategoryList(props.user_id).then((response) => {
    categoryList.value = response.data;
  });

  const secondCategoryList = ref(null);

  function renderSecondLevelCategoryMenu(parent_id) {
    getSecondLevelCategoryList(parent_id).then((response) => {
      secondCategoryList.value = response.data;
    });
  }

</script>

<template>
  <div>
    <el-button round v-for="category in categoryList" @click="renderSecondLevelCategoryMenu(category.id)">
      {{category.name}}
    </el-button>
  </div>
  <div>
    <NotesPage :categoryList="secondCategoryList"/>
  </div>
</template>

<style scoped>

</style>