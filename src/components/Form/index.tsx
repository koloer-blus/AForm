import React, { ReactChild, ReactElement, useEffect, useState } from 'react';
import { Form, FormInstance, FormProps } from 'antd';
import { NamePath } from 'antd/lib/form/interface';
import * as R from 'ramda';

interface IFormGlobalOption {
  disabled?: boolean | NamePath[] | undefined;
  formRef?: FormInstance<any> | undefined;
  setDisabled?: (disabled: boolean | NamePath[] | undefined) => void;
}

interface IProps extends FormProps {
  children: ReactChild[];
  disabled?: boolean | NamePath[];
}

const getDefaultValue = (props: IProps) => {
  const defaultProps = R.clone(props);
  if (!props.form) {
    defaultProps.form = Form.useForm()[0];
  }
  if (props.disabled === undefined) {
    defaultProps.disabled = false;
  }
  if (props.disabled) {
    delete defaultProps.onFinish;
    delete defaultProps.form;
  }
  return defaultProps;
};

export const GlobalFormStore = React.createContext<IFormGlobalOption>({});

function AForm(props: IProps): ReactElement {
  const { form, children, disabled, onFinish, ...reset } = getDefaultValue(props);
  const [formDisabled, setFormDisabled] = useState(disabled);
  useEffect(() => {
    setFormDisabled(disabled);
  }, [disabled]);
  return (
    <GlobalFormStore.Provider
      value={{
        disabled: formDisabled,
        formRef: form,
        //method
        setDisabled: setFormDisabled,
      }}>
      <Form form={form} {...reset}>
        {props.children}
      </Form>
    </GlobalFormStore.Provider>
  );
}

export default React.memo(AForm);
