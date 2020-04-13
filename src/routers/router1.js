// import Home from '../views/Home.vue'
// const Home = () => import( /* webpackChunkName: "home1234" */ '../views/Home.vue')
const PageDemo1 = () => import( /* webpackChunkName: "PageDemo1" */ '../pages/PageDemo1')
const PageDemo2 = () => import( /* webpackChunkName: "PageDemo2" */ '../pages/PageDemo2')
const PageDemo2Child = () => import( /* webpackChunkName: "PageDemo2Child" */ '../pages/PageDemo2Child')

const routes = [
    { path: '/', redirect: '/PageDemo1' },
    { path: '/PageDemo1', component: PageDemo1 },
    {
        path: '/PageDemo2',
        component: PageDemo2,
        children: [
            { path: 'PageDemo2Child', name: 'PageDemo2Child' , component: PageDemo2Child},     // 病床没有病人
        ]
    }
]

export default routes