import { Spinner } from "@nextui-org/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen bg-black/10  fixed  inset-0 backdrop-blur-md z-[999] flex justify-center items-center">
      <Spinner size="lg"></Spinner>
    </div>
  );
};

export default Loading;
