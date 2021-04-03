import React, { useMemo, useContext, useEffect } from 'react';
import { Form, FormItemProps } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import { GlobalFormConf } from '../Form';
interface IProps extends FormItemProps {
  disabled?: boolean | NamePath[];
}

function AItem(props: IProps) {
  const { disabled, rules, label, name, required, ...reset } = props;
  const FormStore = useContext(GlobalFormConf);
  const defaultRequireRules = useMemo(() => {
    if (required) return rules;
    const labelString = typeof label === 'string' ? label : '本项';
    return [{ required: true, message: `${labelString}不能为空` }, ...(rules || [])];
  }, [label, name, required]);

  useEffect(() => {
    if (name && FormStore.formRef) {
      const AItemInstance = FormStore.formRef.getFieldInstance(name);
      if (AItemInstance.input) {
        AItemInstance.input.disabled = disabled === undefined ? FormStore.disabled : disabled;
        return;
      }
      AItemInstance.selectRef && (AItemInstance.selectRef.current.disabled = disabled);
      console.log(reset.children);
    }
  }, [props]);

  return (
    <Form.Item
      {...reset}
      label={label}
      name={name}
      required={required}
      rules={defaultRequireRules}
    />
  );
}

export default AItem;
