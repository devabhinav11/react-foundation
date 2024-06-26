import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="card">
      <div className="item-image">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="food"
        />
      </div>
      <div className="restaurant-details-1">
        <Link to={`/restaurants/restaurant/${id}`}>{name}</Link>
        <span className="rating">{avgRating} ⭐️</span>
      </div>
      <div className="restaurant-details-2">
        <span className="cuisines">{cuisines.join(",")}</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
