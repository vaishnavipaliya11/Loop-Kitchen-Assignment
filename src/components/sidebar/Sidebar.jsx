import "../../styles.css";
import "./sidebar.css";
import { AiFillStar,AiFillCodeSandboxCircle, AiOutlineStar,AiFillInfoCircle,AiFillDollarCircle,AiTwotoneSetting } from "react-icons/ai";
import {BsFileBarGraphFill} from "react-icons/bs"
import {FaDigitalTachograph} from "react-icons/fa"
import {HiPhotograph} from "react-icons/hi"

export const SideBar = () => {
  return (
    <div className="common-flex-row">
      <div className="sidebar-icons-display common-flex-column">
        <div>
          <h3>
            <BsFileBarGraphFill />
          </h3>
          <h3>
            <FaDigitalTachograph />
          </h3>
          <h3>
            <HiPhotograph />
          </h3>
          <h3>
            <AiFillCodeSandboxCircle />
          </h3>
          <h3>
            <AiFillDollarCircle />
          </h3>
        </div>
        <div>
          <h3>
            <AiFillInfoCircle />
          </h3>
          <h3>
            <AiTwotoneSetting />
          </h3>
        </div>
      </div>
      <div className="common-flex-column sidebar-display-container">
        <div>
          <h3>Item Performance</h3>
          <button className="m-sm">Save this search</button>
          <button>View saved search</button>
        </div>
        <div className="common-flex-column start ">
          <h5>Error Rate</h5>
          <div className="common-flex-row wrap center">
            <button className="m-sm sidebar-btn pd-sm">
              under <b>0.5%</b>{" "}
            </button>
            <button className="pd-sm">0.5 to 1%</button>
            <button className="m-sm pd-sm">1 to 1.5%</button>
            <button className="pd-sm">1.5 to 2%</button>
            <button className="m-sm pd-sm">Above 0.5%</button>
          </div>
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
          <div className="rating-icons">
            <input type="checkbox" />
            <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div className="rating-icons">
            <input type="checkbox" />
            <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div className="rating-icons">
            <input type="checkbox" />
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div className="rating-icons">
            <input type="checkbox" />
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiOutlineStar />
          </div>
        </div>
        <div>
          <div className="common-flex-column start">
            <h3>Preperation time</h3>
            <div>
              <button className="m-sm pd-sm">
                under <b>5 min</b>
              </button>
              <button className="pd-sm">5 to 10min</button>
              <button className="m-sm pd-sm">10 to 15min</button>
              <button className="pd-sm">Above 20</button>
            </div>
          </div>
          <div className="common-flex-column start">
            <h3>Wait time</h3>
            <div>
              <button className="m-sm pd-sm">
                under <b>5 min</b>
              </button>
              <button className="pd-sm">5 to 10min</button>
              <button className="m-sm pd-sm">10 to 15min</button>
              <button className="pd-sm">Above 20</button>
            </div>
          </div>
          <div className="common-flex-column start">
            <h3>Hands off time</h3>
            <div>
              <button className="m-sm pd-sm">
                under <b>5 min</b>
              </button>
              <button className="pd-sm">5 to 10min</button>
              <button className="m-sm pd-sm">10 to 15min</button>
              <button className="pd-sm">Above 20</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
