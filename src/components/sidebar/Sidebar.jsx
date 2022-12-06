import "../../styles.css";
import "./sidebar.css";
import { AiFillStar,AiFillCodeSandboxCircle, AiOutlineStar,AiFillInfoCircle,AiFillDollarCircle,AiTwotoneSetting } from "react-icons/ai";
import {BsFileBarGraphFill} from "react-icons/bs"
import {FaDigitalTachograph} from "react-icons/fa"
import {HiPhotograph} from "react-icons/hi"

export const SideBar = ({appliedFilters, setAppliedFilters}) => {
  return (
    <div className="common-flex-row sidebar-parent">
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
      <div className="common-flex-column m-sm sidebar-display-container">
        <div>
          <h3>Item Performance</h3>
          <button className="m-sm pd-sm save-btn">Save this search</button>
          <button className=" pd-sm save-btn">View saved search</button>
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
          <h5>Number of orders {appliedFilters.maxNoOfOrder}</h5>
          <input type="range" min="10" max="100" 
          onChange={(e) =>
            setAppliedFilters({ ...appliedFilters, maxNoOfOrder: e.target.value })
          }/>

          <h5>Order of Volume {appliedFilters.maxOrderVolume}</h5>
          <input type="range" min="10" max="60" 
          />

          <h5>Price range</h5>
          <input type="range" min="100" max="2000"
          onChange={(e) =>
            setAppliedFilters({ ...appliedFilters, dishPrice: e.target.value })
          } />
        </div>
        <div>
          <h5>Ratings</h5>
          <div className="rating-icons">
            <input type="checkbox" 
             onChange={(e) =>
            setAppliedFilters({ ...appliedFilters, rating: "1" })
          }/>
            <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div className="rating-icons">
            <input type="checkbox"
              onChange={(e) =>
                setAppliedFilters({ ...appliedFilters, rating: "2" })
              }

            />
            <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div className="rating-icons">
            <input type="checkbox"
             onChange={(e) =>
                setAppliedFilters({ ...appliedFilters, rating: "3"})
              } />
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />{" "}
            <AiOutlineStar />
          </div>
          <div className="rating-icons">
            <input type="checkbox" 
             onChange={(e) =>
                setAppliedFilters({ ...appliedFilters, rating: "4" })
              }/>
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
