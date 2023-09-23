<script setup>
import Post from "@/components/PostCover.vue";
import {ref} from "vue";
import RecentPosts from "@/components/RecentPosts.vue";
const rateValue = ref();
</script>

<template>
  <el-container>
    <el-aside width="25%">
      <figure>
        <el-avatar/>
        <figcaption>
          <p>黄嘉颖</p>
        </figcaption>
      </figure>
      <main>
        <section>
          <header>
            <h3>
              个人信息:
            </h3>
          </header>
          <main>
            <el-empty/>
          </main>
        </section>
        <section>
          <header>
            <h3>
              勋章:
            </h3>
          </header>
          <main>
            <el-badge value="v" class="item" type="success">
              <el-avatar/>
            </el-badge>
          </main>
        </section>
      </main>
    </el-aside>

    <el-main>
      <header>
        <h3>
          最近:
        </h3>
      </header>
      <main>
        <RecentPosts/>
      </main>
    </el-main>

    <el-aside id="home-left-side" width="25%">
      <section>
        <label>
            今日心情:
        </label>
        <image class="sun">
          &#127774;
        </image>
      </section>
      <section>
        <header>
          <h3>
            工具:
          </h3>
        </header>
        <main>
          <div id="toolbox">
            <div class="item-tool">
              <router-link to="/notebook/1">
                颖的笔记本
              </router-link>
            </div>
            <div class="item-tool">
              <router-link to="/notebook/2">
                琪的笔记本
              </router-link>
            </div>
          </div>
        </main>
      </section>
      <section>
        <header>
          匿名评分:
        </header>
        <main>
          <el-rate v-model="rateValue" allow-half="allow-half"/>
        </main>
      </section>
    </el-aside>
  </el-container>
</template>

<style scoped>
#toolbox {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
</style>