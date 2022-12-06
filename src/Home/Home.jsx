import { useState } from "react";
import "../styles.css";
import { SideBar } from "../components/sidebar/Sidebar";
import { menuData } from "../data";
import { filteredProducts } from "../utils/filteredProducts";
import { DishCard } from "../components/dishCard/DishesCard";

export const Home = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    rating: "",
    minOrderVolume: 60,
    maxNoOfOrder: 100,
    minOrderValue: 2000,
    minErrorRate: 0,
  });

  const finalProducts = filteredProducts(menuData, appliedFilters);
  console.log(filteredProducts(menuData, appliedFilters), "f prod");
  return (
    <div className="layout-container">
      <SideBar
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />

      <div className="common-flex-column card-display-parent">
        <div className="common-flex-row results-block">
          <h4>Results</h4>
          <label for="Sort by">
            <p>
              {" "}
              Sort By
              <input placeholder="sort by" />
            </p>
          </label>
        </div>
        <div className=" common-flex-row  card-display-container">
          {finalProducts.map((data) => {
            return (
              <div>
                <DishCard key={data.Dispatch} data={data} />
              </div>
            );
          })}

          {finalProducts.length === 0 ? <p>No data matches the condition</p>:""}
        </div>
      </div>

    </div>
  );
};
