"use client";

import FxInput from "@/src/components/form/FxInput";
import { Button } from "@nextui-org/button";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };
    console.log(postData);
  };
  const handleAppend = () => {
    append({ name: "questions" });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FxInput name="title" label="Title"></FxInput>

        <div className="flex justify-between items-center">
          <h1>Owner Varification Questions</h1>
          <Button onClick={() => handleAppend()}>Append</Button>
        </div>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center">
            <FxInput
              name={`questions.${index}.value`}
              label="question"
            ></FxInput>
            <Button onClick={() => remove(index)}>Remove</Button>
          </div>
        ))}
        <Button type="submit">Post</Button>
      </form>
    </FormProvider>
  );
};

export default page;
