<script setup>
  import Navigator from "@/components/Navigator.vue";
</script>

<template>
  <el-container>
    <el-header height="1cm">
      <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <h1>
            嘉颖的空间
          </h1>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </el-header>
    <el-main>
    <nav>
      <Navigator/>
    </nav>
    <section>
      <router-view/>
    </section>
    </el-main>
    <el-footer id="footer">
      <p>
        jiaying.info
      </p>
      <a style="color:#000" href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2023009304号</a>
      <p>
        Copyright ©2023 All rights reserved
      </p>
    </el-footer>
  </el-container>
</template>

<style scoped>
#footer{
  text-align: center;
}
</style>

