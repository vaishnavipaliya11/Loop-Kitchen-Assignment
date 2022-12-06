import { DishCard } from "../dishCard/DishesCard";
import { menuData } from "../../data";
import "../../styles.css";
import { useState } from "react";
export const CardDisplay = () => {

  return (
    <div className="common-flex-column card-display-parent">
      <div className="common-flex-row results-block">
        <h4>Results</h4>
        <label for="Sort by">
         <p> Sort By<input placeholder="sort by" /></p> 
        </label>
      </div>
      <div className=" common-flex-row card-display-container">
        {menuData.map((data) => {
            
          return (
            <div>
                <DishCard key={data.Dispatch} data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
