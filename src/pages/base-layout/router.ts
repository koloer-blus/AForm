import React from 'react';
import { RouteInterface } from '@/types/route';

export const routes: RouteInterface[] = [
  {
    path: '/disabled',
    component: React.lazy(() => import('@/pages/disabled-form')),
    name: 'DisabledForm',
  },
  {
    path: '/current-state',
    component: React.lazy(() => import('@/pages/current-state-form')),
    name: 'CurrentStateForm',
  },
];
