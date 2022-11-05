import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="h-12 px-6 shadow-xl">
      <div className="flex items-center h-full">
        <a className="text-xl font-semibold" href="/">
          PizzaStack
        </a>
      </div>
    </div>
  );
};
