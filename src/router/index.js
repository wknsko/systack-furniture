import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

const routes = [
    { path: '/', name: 'Homepage', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;