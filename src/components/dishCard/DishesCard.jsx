import "../../styles.css";
import "./cards.css";
export const DishCard = ({ data }) => {
  const { OrderValue, numOrder, Error_Rate, OrderVolume, Ratings, img } =
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
          No Of Order <span> {numOrder}</span>
        </p>

        <p className="common-flex-row description">
          Order_volume <span>{OrderVolume}</span>{" "}
        </p>
        <p className="common-flex-row description">
          Order_value <span> {OrderValue}</span>
        </p>
        <p className="common-flex-row description">
          Ratings <span> {Ratings}</span>
        </p>
      </div>
    </div>
  );
};
