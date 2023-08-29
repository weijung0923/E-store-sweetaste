const routes = [
    {
        path: '/',
        name: 'index',
        title: '首頁',
        component: () => import ('../views/frondend/Home.vue'),
    },
    {
        path: '/product',
        name: 'product',
        title: '產品',
        component: () => import ('../views/frondend/Product.vue'),
    },
    {
        path: '/login',
        name: 'login',
        title: '登入',
        component: () => import ('../views/admin/Login.vue'),
    }
]

export default routes;