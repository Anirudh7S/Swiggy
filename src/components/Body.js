import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata" // Import the resList from mockdata

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            info={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
