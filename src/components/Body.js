import React, { useState, useEffect } from "react";
import Res_card from "./Res_card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useApiData from "../utils/useApiData";

const Body = () => {
  const apiData = useApiData();
  const [resList, setResList] = useState([]);

  useEffect(() => {
    if (apiData) {
      setResList(apiData);
    }
  }, [apiData]);
  console.log("apidata =  ", apiData)

  // Conditional rendering
  if (!resList || resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <button
        className="filter"
        onClick={() => {
          const filteredList = resList.filter((res) => res.info.avgRating >= 4);
          console.log(filteredList)
          setResList(filteredList);
        }}
      >
        Top-rated Restaurants
      </button>
      <div className="res-container">
        {resList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <Res_card Res_data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
