
import HomePage from '../pages/home.vue';
import NotFoundPage from '../pages/404.vue';
import ImagePage from '../pages/image.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
    master: true,
    detailRoutes: [
      {
        path: '/image/:id/',
        component: ImagePage
      }
    ]
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
