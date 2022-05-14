import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home"
import Detail from "@/views/Detail"
import Category from "@/views/Category"

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/category/detail/:categoryName',
        name:'CategoryDetail',
        component:Category
    },
    {
        path:'/detail/:id',
        name:'Detail',
        component:Detail
    },
];

const router= createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router;