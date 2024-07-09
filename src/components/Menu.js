import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [resMenuData, setResMenuData] = useState(null);

  const {resId}= useParams;
  
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL + resId
    );
    const json = await data.json();
    setResMenuData(json);
    console.log(json);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  if (resMenuData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenuData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}   -    {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 }</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
