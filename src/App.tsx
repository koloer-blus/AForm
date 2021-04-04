import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes, basename } from '@/router/router';
import { RenderRoutes } from '@/router/RenderRoutes';
import '@/App.less';

const App: React.FC = () => {
  return <Router basename={basename}>{RenderRoutes(routes)}</Router>;
};

export default App;
