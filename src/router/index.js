
import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import PostPage from "@/components/PostPage.vue";
import DevTimeline from "@/components/DevTimeline.vue";
import NotebookPage from "@/components/NotebookPage.vue";
import NotesPage from "@/components/NotesPage.vue";
import Post from "@/components/Post.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/post', component: PostPage},
    {path: '/post/:id', component: Post, props: true},
    {path: '/dev-timeline', component: DevTimeline},
    {
        path: '/notebook/:user_id',
        component: NotebookPage,
        children: [
            {
                path: 'all',
                component: NotesPage
            }
        ],
        props: true
    }
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router;