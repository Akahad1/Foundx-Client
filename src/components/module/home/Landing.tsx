/* eslint-disable react/self-closing-comp */
import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/travel.jpg')] bg-cover bg-center">
      <div className="w-96  max-w-xl mx-auto pt-32">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{ inputWrapper: "bg-defult-100" }}
            placeholder="Search"
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none"></SearchIcon>
            }
          ></Input>
        </form>
      </div>
    </div>
  );
};

export default Landing;
