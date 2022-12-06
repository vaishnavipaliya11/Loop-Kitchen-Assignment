import "../../styles.css";
import "./cards.css";
export const DishCard = ({ data }) => {
  console.log("cardData", data);
  const { Order_value, Dispatch, Error_Rate, Order_volume, Ratings, img } =
    data;
  return (
    <div className="common-flex-column product-card-container">
      <div className="common-flex-column card-title">
        <h4 className="font-md " >Caps,Trunk</h4>
        <span>Desi Beryaniz</span>
      </div>
      <div>
        <img src={img} alt="dish img" />
      </div>
      <div className="common-flex-column">
        <p className="common-flex-row description error">
          Error_Rate <span>{Error_Rate}</span>{" "}
        </p>
        <p className="common-flex-row description">
          Dispatch <span> {Dispatch}</span>
        </p>

        <p className="common-flex-row description">
          Order_volume <span>{Order_volume}</span>{" "}
        </p>
        <p className="common-flex-row description">
          Order_value <span> {Order_value}</span>
        </p>
        <p className="common-flex-row description">
          Ratings <span> {Ratings}</span>
        </p>
      </div>
    </div>
  );
};
