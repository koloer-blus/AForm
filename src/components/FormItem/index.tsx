import React, { useMemo, useContext, useEffect, useRef } from 'react';
import { Form, FormItemProps } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { GlobalFormConf } from '../Form';
interface IProps extends FormItemProps {
  disabled?: boolean | NamePath[];
}

const addPropToChild = (children: any, options: any) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      ...options,
    });
  });
};

function AItem(props: IProps) {
  const { disabled, rules, label, name, required, children, ...reset } = props;
  const FormStore = useContext(GlobalFormConf);
  const defaultRequireRules = useMemo(() => {
    if (required) return rules;
    const labelString = typeof label === 'string' ? label : '本项';
    return [{ required: true, message: `${labelString}不能为空` }, ...(rules || [])];
  }, [label, name, required]);
  const formItemsRef = useRef<any>(
    addPropToChild(children, {
      disabled: disabled === undefined ? FormStore.disabled : disabled,
    })
  );
  useEffect(() => {
    if (name) {
      formItemsRef.current = addPropToChild(children, {
        disabled: disabled === undefined ? FormStore.disabled : disabled,
      });
    }
  }, [disabled]);

  return (
    <Form.Item {...reset} label={label} name={name} required={required} rules={defaultRequireRules}>
      {formItemsRef.current}
    </Form.Item>
  );
}

export default React.memo(AItem);
