<script setup>
  const activities = [
    {
      title: "重构帖子：分离成帖子封面和单独帖子页面",
      timestamp: "2023-09-23"
    },
    {
      title: "环境变量配置支持",
      timestamp: "2023-09-23"
    },
    {
      title: "分类数据库添加user_id行，实现分类私有化",
      timestamp: "2023-09-23"
    },
    {
      title: "重构无限滑动容器，做成了可重复利用的组件",
      timestamp: "2023-09-14"
    },

    {
      title: "添加笔记本工具，并添加了二级分类方式管理帖子中",
      timestamp: "2023-09-13"
    },
    {
      title: "添加markdown编辑器，和内容支持markdown解析",
      timestamp: "2023-09-12"
    },
    {
      title: "给帖子添加type属性",
      content: "1. 在帖子类中添加type属性，并在内添加帖子类型enum类。 2. 修改xml文件 3. 修改controller文件以支持新属性",
      timestamp: "2023-09-11"
    },
    {
      title: "html和css代码优化",
      content: "全局统一化css渲染，以及html语义化运用标签便于管理和理解",
      timestamp: '2023-09-10'
    } ,
    {
      title: "添加帖子添加操作后端",
      content: '前端显示表格，以post方法请求后端api，通过mybatis存储post。',
      timestamp: '2023-09-09',
    }
  ]
</script>

<template>
  <el-timeline class="content">
    <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
    >
      <header>
        {{activity.title}}
      </header>
      <main>
        <section>
          {{ activity.content }}
        </section>
      </main>
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped>

</style>