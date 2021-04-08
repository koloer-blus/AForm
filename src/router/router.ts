import React from 'react';
import { RouteInterface } from '@/types/route';
export const basename = '/AForm';

export const routes: RouteInterface[] = [
  {
    path: '/',
    component: React.lazy(() => import('@/pages/base-layout')),
    name: 'LayoutTemplate',
  },
];
