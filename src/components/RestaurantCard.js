import { CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ info }) => {
    const { sla } = info;
  
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src= {`${CDN_URL}${info.cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;