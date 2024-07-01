import Res_card from "./Res_card";
import extractedResList from "../utils/extractedResList";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(extractedResList);
  
  return (
    <div className="body">
      <button
        className="filter"
        onClick={() => {
          const filteredList = resList.filter((res) => res.info.avgRating >= 4);
          setResList(filteredList);
        }}
      >
        Top-rated Restaurants
      </button>
      <div className="res-container">
        {resList.map((restaurant) => (
          <Res_card key={restaurant.info.id} Res_data={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
