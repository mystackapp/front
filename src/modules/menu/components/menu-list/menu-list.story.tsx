import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import pizzaMenu from "@app//mocks/pizza.json";

const MenuListStory: ComponentMeta<typeof MenuList> = {
  title: "Menu/MenuList",
  component: MenuList,
};

const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

export const View = Template.bind({});
View.args = {
  items: pizzaMenu,
};

export default MenuListStory;
