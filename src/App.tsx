import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes, basename } from '@/router/router';
import { RenderRoutes } from '@/router/RenderRoutes';
import '@/App.less';
import { Spin } from 'antd';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Router basename={basename}>{RenderRoutes(routes)}</Router>
    </Suspense>
  );
};

export default App;
