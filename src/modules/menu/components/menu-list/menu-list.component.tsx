import React, { FC } from "react";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";
import { Pizza } from "@app/modules/menu/types/pizza";

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => (
  <div className="flex justify-center flex-wrap gap-10">
    {items.map(({ image, ...pizza }) => (
      <MenuItem
        imagePath={"/assets/pizza/" + image}
        {...pizza}
        key={`pizza-${pizza.id}`}
      />
    ))}
  </div>
);
