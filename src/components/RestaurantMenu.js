import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BASE_RESTAURANT_MENU } from "../constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=32.2733352&lng=75.6522066&restaurantId=" +
        +{ resId } +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const data = await response.json();
    console.log(data);
    setResMenu(data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  if (!resMenu) return <Shimmer />;

  const { name, cuisines, price } = resMenu?.data?.cards[2]?.card?.card.info;
  const { itemCards } =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards[0].card.info);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>Cuisines : {cuisines.join(", ")}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.tid}>
            <div>
              <span>{item.card.info.name}</span> -{" "}
              <span>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
