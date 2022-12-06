import { useState } from "react";
import "../styles.css";
import { CardDisplay } from "../components/CardsDisplay/CardDisplay";
import { SideBar } from "../components/sidebar/Sidebar";
import { menuData } from "../data";
import { filteredProducts } from "../utils/filteredProducts";

export const Home = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    rating: "",
    minOrderVolume: 10,
    maxNoOfOrder: 10,
    minOrderValue: 450,
    minErrorRate: 0,
  });

  console.log(filteredProducts(menuData, appliedFilters), "f prod");
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
