import React from "react";
import FxModel from "./FxModel";
import Fxform from "../../form/Fxform";
import FxInput from "../../form/FxInput";
import FXTextarea from "../../form/FXTextArea";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IProps {
  id: string;
  questions: string[];
}
const ClaimRequestModal = ({ id, questions }: IProps) => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <FxModel
      title="Claim Request"
      buttonVariant="light"
      buttonText="Claim Request"
    >
      <Fxform onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <FxInput
              label={`Answer- ${index + 1}`}
              name={`Answer- ${index + 1}`}
            ></FxInput>
          </div>
        ))}
        <FXTextarea label="Descaption" name="Descaption"></FXTextarea>
        <div>
          <Button type="submit" className="w-full flex-1 mt-2" size="lg">
            Send
          </Button>
        </div>
      </Fxform>
    </FxModel>
  );
};

export default ClaimRequestModal;
