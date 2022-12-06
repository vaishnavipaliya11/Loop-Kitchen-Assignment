import { useState } from "react";
import "../styles.css";
import { CardDisplay } from "../components/CardsDisplay/CardDisplay";
import { SideBar } from "../components/sidebar/Sidebar";
import { menuData } from "../data";
import { filteredProducts } from "../utils/filteredProducts";

export const Home = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    rating: [],
    maxOrderValue: 2000,
    maxNoOfOrder: 10,
    maxPrice: 10000,
  });
  const finalProducts=filteredProducts(menuData, appliedFilters)
  console.log(filteredProducts(menuData,appliedFilters),"f prod");
  return (
    <div className="layout-container">
      <SideBar
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <CardDisplay />
    </div>
  );
};
