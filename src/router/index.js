import { createWebHistory ,createRouter} from "vue-router";
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
        path:'/detail/meal/:mealId',
        name:'DetailMeal',
        component:Detail
    },
];

const router= createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router;