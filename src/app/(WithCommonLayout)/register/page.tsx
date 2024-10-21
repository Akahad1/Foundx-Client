"use client";

import Fxform from "@/src/components/form/Fxform";
import FxInput from "@/src/components/form/FxInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import { resisterUser } from "@/src/Services/AuthService";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function RegisterPage() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  // useEffect(() => {
  //   if (isPending) {
  //   }
  // }, [isPending]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    console.log("Inside form user data: ", userData);
    handleUserRegistration(userData);
  };

  if (isPending) {
    //  handle loading state
  }

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <Fxform
          //! Only for development
          defaultValues={{
            name: "Mir Hussain",
            email: "mir@gmail.com",
            mobileNumber: "01711223344",
            password: "123456",
          }}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FxInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FxInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FxInput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FxInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </Fxform>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
