import loadable from '@loadable/component';
import { RouteInterface } from '@/types/route';
export const basename = '';

export const routes: RouteInterface[] = [
  {
    path: '/',
    component: loadable(() => import('@/pages/base-layout')),
    name: 'base-form',
    title: 'base-form',
  },
];
