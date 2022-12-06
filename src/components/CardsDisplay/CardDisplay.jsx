import { DishCard } from "../dishCard/DishesCard";
import { menuData } from "../../data";
export const CardDisplay = () => {
  return (
    <div>
      {menuData.map((data) => {
        return (
          <div>
            <DishCard key={data.Dispatch} data={data} />
          </div>
        );
      })}
    </div>
  );
};
