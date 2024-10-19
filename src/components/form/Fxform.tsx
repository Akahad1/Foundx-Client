import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}
interface props extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}
const Fxform = ({ children, onSubmit, defaultValues, resolver }: props) => {
  const formConfig: formConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const submitHander = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHander(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Fxform;
