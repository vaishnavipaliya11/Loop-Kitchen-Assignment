import "../../styles.css";
export const DishCard = ({ data }) => {
  console.log("cardData", data);
 
  return (
    <div className="common-flex-column">
      <div>
        <h3>caps, tunk</h3>
        <span>small</span>
      </div>
      <div>
        <img src={data.img} alt="dish img"/>
      </div>
      <div>
        <li>{data.Error_Rate}</li>
        <li>{data.Dispatch}</li>
        <li>{data.Dispatch}</li>
        <li></li>
        <li></li>
      </div>
    </div>
  );
};
