import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "../ui/RestaurantCard";
import useFetchRestaurants from "../hooks/useFetchRestaurants";

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const data = useFetchRestaurants();

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchItem(inputValue);

    if (inputValue.length > 0) {
      const filteredItem = data.filter((item) =>
        item.info?.name.toLowerCase().includes(inputValue)
      );
      setFilteredData(filteredItem);
    } else {
      setFilteredData(data);
    }
  };
  return (
    <div className="content">
      <input
        type="search"
        placeholder="Enter Restaurant or cuisine"
        onChange={handleSearch}
      />
      <div className="restaurant-list">
        {searchItem.length === 0 && filteredData?.length === 0 ? (
          <Shimmer />
        ) : searchItem.length > 0 && filteredData.length === 0 ? (
          <p>No Data</p>
        ) : (
          filteredData?.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
