import React, { FC } from "react";

interface MenuItemProps {
  imagePath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

export const MenuItem: FC<MenuItemProps> = ({
  imagePath,
  weight,
  title,
  ingredients,
  price,
}) => {
  return (
    <div className="w-96 bg-white rounded-2xl shadow-xl">
      <div className="relative">
        <img
          className="w-full h-[15rem] object-cover object-center rounded-t-2xl"
          src={imagePath}
          alt={title}
        />
        <span className="absolute right-3 bottom-1.5 text-white bg-gray-900/50 px-2 rounded-[2rem]">
          {weight}г
        </span>
      </div>
      <div className="p-8">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="mb-8">{ingredients}</p>
        <span className="font-semibold text-xl">{price} грн</span>
      </div>
    </div>
  );
};
