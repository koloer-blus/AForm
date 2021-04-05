import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { routes } from './router';
import { RenderRoutes } from '@/router/RenderRoutes';
import './style.less';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const BaseLayout = () => {
  return (
    <Layout className="layout">
      <Header className="layout-header">
        <Title keyboard level={1}>
          AForm
        </Title>
      </Header>
      <Layout>
        <Sider className="layout-sider">
          <Menu>
            <Menu.Item className="menu-router-item">
              <Link to="/">disabled</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="content">
          <Router>{RenderRoutes(routes)}</Router>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
