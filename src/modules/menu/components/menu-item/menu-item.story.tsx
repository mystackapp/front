import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";

const MenuItemStory: ComponentMeta<typeof MenuItem> = {
  title: "Menu/MenuItem",
  component: MenuItem,
};

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/pizza/pizza-01.jpeg",
  weight: 555,
  title: "Піца Мангеттен",
  ingredients:
    "(подвійна порція грибів), гриби, моцарела, пепероні, соус Альфредо",
  price: 125,
};

export default MenuItemStory;
