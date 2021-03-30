import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';

export const routes: RouteInterface[] = [
  {
    path: '/',
    component: loadable(() => import('@/pages/form/base-form')),
    name: 'base-layout',
    title: 'base-layout',
  },
];
