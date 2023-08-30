import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

const router = createRouter({
    history: createWebHistory('/E-store-sweetaste/'),
    routes: routes,
})

// // 全局前置守衛，這裡可以加入用入登入判斷
// router.beforeEach((to, from, next) => {
//     // 
//     next();
// })

// // 全局後置鉤子，這裡可以加入改變頁面標題等操作
// router.afterEach((to, from) => {
//     const _title = to.meta._title;
//     if(_title) {
//         window.document.title = _title;
//     }
// })

export default router;