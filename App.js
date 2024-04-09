import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RestaurantCard from "./src/ui/RestaurantCard";
import Header from "./src/components/Header";
import Shimmer from "./src/components/Shimmer";

const AppLayout = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.2733352&lng=75.6522066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
    <div className="container">
      <Header />
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
            filteredData.map((restaurant) => (
              <RestaurantCard resData={restaurant} key={restaurant.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
