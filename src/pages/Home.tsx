import React from 'react'
import { Layout, Row, Col } from 'antd'
import Make from '@/components/make'
import Preview from '@/components/preview'
import './Home.less'
const { Header, Footer, Content } = Layout
const Home: React.FC = () => {
  return (
    <Layout className="home-layout">
      <Header className="header">AForm</Header>
      <Content className="content">
        <Row>
          <Col>
            <Make></Make>
          </Col>
          <Col>
            <Preview></Preview>
          </Col>
        </Row>
      </Content>
      <Footer className="footer">-Auto Form-</Footer>
    </Layout>
  )
}

export default Home
