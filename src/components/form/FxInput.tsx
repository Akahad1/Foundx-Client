import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";
type inputtype = {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  label: string;
  name: string;
  type: string;
};

const FxInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  label,
  type = "text",
  name,
}: inputtype) => {
  const { register } = useFormContext();
  return (
    <Input
      {...register(name)}
      variant={variant}
      size={size}
      required={required}
      label={label}
      name={name}
      type={type}
    ></Input>
  );
};

export default FxInput;
