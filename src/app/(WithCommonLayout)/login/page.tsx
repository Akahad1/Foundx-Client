"use client";

import Fxform from "@/src/components/form/Fxform";
import FxInput from "@/src/components/form/FxInput";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValues, SubmitHandler } from "react-hook-form";
import loginvalidation from "@/src/shcma/login.shcma";

const LoginPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <Fxform onSubmit={onSubmit} resolver={zodResolver(loginvalidation)}>
          <div className="py-3">
            <FxInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FxInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </Fxform>
        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
