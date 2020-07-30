import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/Login.vue'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: login,
        children: [
            {
                path: '/login',
                component: login,
                meta: {
                    title: '登录'
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