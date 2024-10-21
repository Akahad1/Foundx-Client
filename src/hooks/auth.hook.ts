import { useMutation } from "@tanstack/react-query";
import { resisterUser } from "../Services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await resisterUser(userData),
    onSuccess: () => {
      toast.success("User creation successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
