import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from "@app/common/components/footer/footer.component";

const FooterStory: ComponentMeta<typeof Footer> = {
  title: "Common/Footer",
  component: Footer,
};

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const View = Template.bind({});

export default FooterStory;
