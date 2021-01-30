import React from 'react'
import './index.less'
import { Button, Form, Input } from 'antd'
const Preview: React.FC = () => {
  return (
    <div className="preview">
      <Form>
        <Form.Item>
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button>提交</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Preview
