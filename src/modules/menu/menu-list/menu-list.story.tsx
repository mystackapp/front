import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuList } from "./menu-list.component";

const MenuListStory: ComponentMeta<typeof MenuList> = {
  title: "Menu/MenuList",
  component: MenuList,
};

const Template: ComponentStory<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});

export default MenuListStory;
