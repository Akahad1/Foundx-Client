"use server";

import AxiosInstance from "@/src/lib/AuthInstanse";
import { cookies } from "next/headers";

import { FieldValues } from "react-hook-form";

export const resisterUser = async (userData: FieldValues) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", userData);
    if (data.success) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
