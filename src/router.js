import {createWebHistory, createRouter} from "vue-router";
import ListStudent from "./Views/ListStudent";
import ListClass from "./Views/ListClass";
import AddStudent from "./Views/AddStudent";
import AddClass from "./Views/AddClass";
import ModifyStudent from "./Views/ModifyStudent";
import ModifyClass from "./Views/ModifyClass";
const routes = [
    {
        path: "/",
        component: ListStudent,
    },
    {
        path: "/listclass",
        component: ListClass,
    },
    {
        path: "/addstudent",
        component: AddStudent,
    },
    {
        path: "/addclass",
        component: AddClass,
    },
    {
        path: "/modifystudent/:id",
        component: ModifyStudent,
    },
    {
        path: "/modifyclass/:id",
        component: ModifyClass,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;