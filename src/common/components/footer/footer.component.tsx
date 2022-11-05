import React, { FC } from "react";
import { FooterLink } from "@app/common/components/footer-link/footer-link.component";

export const Footer: FC = () => {
  return (
    <div className="bg-gray-900 pt-12 px-12 pb-8">
      <div>
        <div className="mb-4">
          <span className="text-sm font-bold text-zinc-500 uppercase">
            Контакти
          </span>
        </div>
        <div className="mb-8">
          <ul>
            <FooterLink href="tel:+380999999999">099 999 99 99</FooterLink>
            <FooterLink href="mailto:info@pizzastack.app">
              info@pizzastack.app
            </FooterLink>
          </ul>
        </div>
        <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
        <div>
          <span className="text-xl font-bold text-white">PizzaStack</span>
        </div>
      </div>
    </div>
  );
};
