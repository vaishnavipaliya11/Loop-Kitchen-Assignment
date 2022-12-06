import "../../styles.css";
import "./sidebar.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const SideBar = () => {
  return (
    <div className="common-flex-row">
      <div>icons</div>
      <div className="common-flex-column sidebar-display-container">
        <div>
          <h3>Item Performance</h3>
          <button>Save this search</button>
          <button>View saved search</button>
        </div>
        <div>
          <h5>Error Rate</h5>
          <button>under 0.5%</button>
          <button>0.5 to 1%</button>
          <button>1 to 1.5%</button>
          <button>1.5 to 2%</button>
          <button>Above 0.5%</button>
        </div>
        <div>
          <h5>Number of orders</h5>
          <input type="range" min="10" max="1000" />

          <h5>Order of value</h5>
          <input type="range" min="10" max="1000" />

          <h5>Price range</h5>
          <input type="range" min="100" max="10000" />
        </div>
        <div>
          <h5>Ratings</h5>
          <div>
            <input type="checkbox" />
            <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div>
            <input type="checkbox" />
            <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div>
            <input type="checkbox" />
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div>
            <input type="checkbox" />
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiOutlineStar />
          </div>
        </div>
        <div>
          <div>
            <h3>Preperation time</h3>
            <button>under 5min</button>
            <button>5 to 10min</button>
            <button>10 to 15min</button>
            <button>Above 20</button>
          </div>
          <div>
            <h3>Wait time</h3>
            <button>under 5min</button>
            <button>5 to 10min</button>
            <button>10 to 15min</button>
            <button>Above 20</button>
          </div>
          <div>
            <h3>Hands off time</h3>
            <button>under 5min</button>
            <button>5 to 10min</button>
            <button>10 to 15min</button>
            <button>Above 20</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
