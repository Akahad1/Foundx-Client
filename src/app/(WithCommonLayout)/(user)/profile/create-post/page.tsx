"use client";

import FXDatePicker from "@/src/components/form/FxDatePiker";
import FxInput from "@/src/components/form/FxInput";
import FXSelector from "@/src/components/form/FXSelector";
import { DateToIso } from "@/src/utils/dateToISO";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import React, { ChangeEvent, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCatagoris } from "@/src/hooks/catagoris.hook";
import { useUser } from "@/src/context/user.provider";
import FXTextarea from "@/src/components/form/FXTextArea";
import { useCreatePost } from "@/src/hooks/post.hook";

const page = () => {
  const [imgeFile, setImageFile] = useState<File[] | []>([]);
  const [Previeimge, setPrevieImage] = useState<string[] | []>([]);
  const { mutate: HandlePostData } = useCreatePost();
  console.log(Previeimge);
  const { user } = useUser();
  const {
    data: CategoryData,
    isSuccess: categorySuccess,
    isLoading,
  } = useGetCatagoris();
  let catagorayOption: { key: string; label: string }[] = [];
  if (CategoryData?.data && !isLoading) {
    catagorayOption = CategoryData.data.map(
      (catagory: { _id: string; name: string }) => ({
        key: catagory._id,
        label: catagory.name,
      })
    );
  }
  console.log(CategoryData);
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const cityOptions = allDistict()
    .sort()
    .map((city: string) => ({
      key: city,
      label: city,
    }));
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const postData = {
      user: user?._id,
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: DateToIso(data.dateFound),
    };
    console.log(postData);
    formData.append("data", JSON.stringify(postData));
    for (let image of imgeFile) {
      formData.append("itemImages", image);
    }
    HandlePostData(formData);
  };
  const handleAppend = () => {
    append({ name: "questions" });
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFile((pre) => [...pre, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrevieImage((pre) => [...pre, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
      <h1 className="text-2xl font-semibold">Post a found item</h1>
      <Divider className="mb-5 mt-3" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FxInput label="Title" name="title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker label="Found date" name="dateFound" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FxInput label="Location" name="location" />
            </div>
            <div className="min-w-fit flex-1">
              <FXSelector label="City" name="city" options={cityOptions} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXSelector
                disabled={!categorySuccess}
                label="Category"
                name="category"
                options={catagorayOption}
              />
            </div>
            <div className="min-w-fit flex-1">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input
                multiple
                className="hidden"
                id="image"
                type="file"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
          </div>

          {Previeimge.length > 0 && (
            <div className="flex gap-5 my-5 flex-wrap">
              {Previeimge.map((imageDataUrl) => (
                <div
                  key={imageDataUrl}
                  className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2"
                >
                  <img
                    alt="item"
                    className="h-full w-full object-cover object-center rounded-md"
                    src={imageDataUrl}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap-reverse gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXTextarea label="Description" name="description" />
            </div>
          </div>

          <Divider className="my-5" />

          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button onClick={() => handleAppend()}>
              {/* <AddIcon /> */}
              Append
            </Button>
          </div>

          <div className="space-y-5">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FxInput label="Question" name={`questions.${index}.value`} />
                <Button
                  isIconOnly
                  className="h-14 w-16"
                  onClick={() => remove(index)}
                >
                  {/* <TrashIcon /> */}
                </Button>
              </div>
            ))}
          </div>

          <Divider className="my-5" />
          <div className="flex justify-end">
            <Button size="lg" type="submit">
              Post
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
