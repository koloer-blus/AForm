import React, {
  ReactChild,
  ReactChildren,
  ReactElement,
  useContext,
  useRef,
  useState,
} from 'react';
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
  return defaultProps;
};

export const GlobalFormConf = React.createContext<IFormGlobalOption>({
  disabled: false,
});

function AForm(props: IProps): ReactElement {
  const { form, children, disabled, ...reset } = getDefaultValue(props);
  const [formDisabled, setFormDisabled] = useState(disabled);

  return (
    <GlobalFormConf.Provider
      value={{
        disabled: formDisabled,
        formRef: form,
        //method
        setDisabled: setFormDisabled,
      }}>
      <Form form={form} {...reset}>
        {props.children}
      </Form>
    </GlobalFormConf.Provider>
  );
}

export default AForm;
