import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "@app/common/components/header/header.component";

const HeaderStory: ComponentMeta<typeof Header> = {
  title: "Common/Header",
  component: Header,
};

const Template: ComponentStory<typeof Header> = () => <Header />;

export const View = Template.bind({});

export default HeaderStory;
