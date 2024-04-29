import React, { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.2733352&lng=75.6522066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(
    //   data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useFetchRestaurants;
