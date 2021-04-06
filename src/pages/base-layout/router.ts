import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';

export const routes: RouteInterface[] = [
  {
    path: '/AForm/disabled',
    component: loadable(() => import('@/pages/form/disabled-form')),
    name: 'disabled-Form',
    title: 'disabled-Form',
  },
  // {
  //   path: '/AForm/current-state',
  //   component: loadable(() => import('@/pages/form/current-state-form')),
  //   name: 'current-Form',
  //   title: 'current-Form'
  // },
];
