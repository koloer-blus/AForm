import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { routes } from './router';
import { RenderRoutes } from '@/router/RenderRoutes';
import './style.less';
const { Header, Sider, Content } = Layout;
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
              <NavLink to="/disabled">disabled</NavLink>
            </Menu.Item>
            <Menu.Item className="menu-router-item">
              <NavLink to="/current-state">current</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="content">{RenderRoutes(routes)}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
