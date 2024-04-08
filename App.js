import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { resList } from "./src/utils/data";
import RestaurantCard from "./src/ui/RestaurantCard";
import Header from "./src/components/Header";

const AppLayout = () => {
  const [data, setData] = useState(resList);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchItem(inputValue);

    if (inputValue.length > 0) {
      const filteredItem = resList.filter((item) =>
        item.info?.name.toLowerCase().includes(inputValue)
      );
      setData(filteredItem);
    } else {
      setData(resList);
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
          {data.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
