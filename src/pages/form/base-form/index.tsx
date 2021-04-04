import React, { useEffect, useState } from 'react';
import { Input, InputNumber, Button, AutoComplete } from 'antd';
import AItem from '@/components/FormItem';
import AForm from '@/components/Form';
const { Option } = AutoComplete;
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
  const [result, setResult] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setDisabled(!disabled);
        }}>
        设置disabled： {`${disabled}`}
      </Button>
      <AForm
        {...layout}
        disabled={disabled}
        name="nest-messages"
        validateMessages={validateMessages}>
        <AItem name={['user', 'name']} label="Name">
          <Input />
          <Input />
          <Input />
        </AItem>
        <AItem name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <AutoComplete style={{ width: 200 }} placeholder="input here">
            {result.map((email: string) => (
              <Option key={email} value={email}>
                {email}
              </Option>
            ))}
          </AutoComplete>
        </AItem>
        <AItem name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </AItem>
        <AItem label="Website">
          <AItem name={['user', 'website']} label="Website">
            <Input />
          </AItem>
        </AItem>
        <AItem name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </AItem>
        <AItem wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AItem>
      </AForm>
    </React.Fragment>
  );
};

export default BaseForm;
