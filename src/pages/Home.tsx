import React, { useState, useEffect } from 'react'
import { Button, Layout, Drawer } from 'antd'
import Make from '@/components/make'
import Preview from '@/components/preview'
import './Home.less'
const { Header, Footer, Content } = Layout
const Home: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <Layout className="home-layout">
      <Drawer
        title="可选表单"
        placement="right"
        closable={false}
        width={720}
        onClose={() => {
          setIsShow(false)
        }}
        visible={isShow}
      ></Drawer>
      <Header className="header">AForm</Header>
      <Content className="content">
        <Preview></Preview>
        <Button
          type={'primary'}
          onClick={() => {
            setIsShow(true)
          }}
        >
          添加
        </Button>
        <Button type={'default'}>保存</Button>
      </Content>
      <Footer className="footer">-Auto Form-</Footer>
    </Layout>
  )
}

export default Home
