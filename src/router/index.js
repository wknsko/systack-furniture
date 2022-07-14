import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import NotFound from '../views/NotFound';

const routes = [
    // { path: '/', redirectTo: '/home' },
    { path: '/home', name: 'Home', component: Home, alias: '/' },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;