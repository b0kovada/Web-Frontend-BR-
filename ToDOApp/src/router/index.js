import { createRouter, createWebHistory } from 'vue-router';
import TasksPage from '../views/TasksPage.vue';
import NewTaskPage from '../views/NewTaskPage.vue';
import EditTaskPage from '../views/EditTaskPage.vue';

const routes = [
    { path: '/tasks', component: TasksPage },
    { path: '/newtask', component: NewTaskPage },
    { path: '/edittask/:id', component: EditTaskPage, props: true },
    { path: '/', redirect: '/tasks' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
