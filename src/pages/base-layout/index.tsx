import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './router';
import { RenderRoutes } from '@/router/RenderRoutes';
import './style.less';
const { Header, Footer, Sider, Content } = Layout;

const BaseLayout = () => {
  return (
    <Layout className="layout">
      <Header>AForm</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content className="content">
          <Router>{RenderRoutes(routes)}</Router>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default BaseLayout;
