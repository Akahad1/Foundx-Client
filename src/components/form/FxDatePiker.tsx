import { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}
export default function FXDatePicker({ label, name }: IProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        
        <DatePicker label={label} className="max-w-[284px]" {...fields} />
      )}
    ></Controller>
  );
}
