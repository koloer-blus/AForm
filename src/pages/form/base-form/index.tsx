import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const BaseForm = () => {
  const [FormRef] = useForm(undefined);
  useEffect(() => {
    console.log('ref', FormRef.__INTERNAL__);
  }, []);
  const onFinish = (values: any) => {
    console.log('field', FormRef.getFieldsValue(true));
  };
  return (
    <Form
      form={FormRef}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BaseForm;
