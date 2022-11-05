import React from "react";
import { Header } from "@app/common/components/header/header.component";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { Footer } from "@app/common/components/footer/footer.component";
import pizzaMenu from "@app/mocks/pizza.json";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 mt-12 mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
