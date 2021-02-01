import React from 'react'
import './index.less'
import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const LayoutPage: React.FC = () => {
  return (
    <Layout className={'layout-page'}>
      <Sider className={'sider'}>Sider</Sider>
      <Layout>
        <Header className={'header'}>Header</Header>
        <Content>Content</Content>
        <Footer className={'footer'}>Made with 🍻 by BaiZiyu-fe</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
