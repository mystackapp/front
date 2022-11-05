import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FooterLink } from "@app/common/components/footer-link/footer-link.component";

const FooterLinkStory: ComponentMeta<typeof FooterLink> = {
  title: "Common/FooterLink",
  component: FooterLink,
};

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);

export const View = Template.bind({});
View.args = {
  href: "tel:+380999999999",
  children: "099 999 99 99",
};

export default FooterLinkStory;
