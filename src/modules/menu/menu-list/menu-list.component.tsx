import React, { FC } from "react";
import pizzaMenu from "@app/mocks/pizza.json";
import { MenuItem } from "../menu-item/menu-item.component";

export const MenuList: FC = () => (
  <div className="flex flex-wrap gap-10">
    {pizzaMenu.map(({ image, ...pizza }) => (
      <MenuItem
        imagePath={"/assets/pizza/" + image}
        {...pizza}
        key={pizza.id}
      />
    ))}
  </div>
);
