import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/Login.vue'
import main from '../page/Main.vue'
import App from '../App'



Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
        children: [
            {
                path: '/login',
                component: login,
                name: 'login',
                meta: {
                    title: '登录',
                    keepAlive: false
                },
            },
            {
                path: '/main',
                component: main,
                name: 'main',
                meta: {
                    title: '主页',
                    keepAlive: false
                },
            }
        ]
    },
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;