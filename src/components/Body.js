import React, { useState, useEffect } from "react";
import Res_card, { addLabel } from "./Res_card";
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
  console.log("apidata =  ", apiData);

  // Conditional rendering
  if (!resList || resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-4">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          const filteredList = resList.filter((res) => res.info.avgRating >= 4);
          console.log(filteredList);
          setResList(filteredList);
        }}
      >
        Top-rated Restaurants
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.promoted ? (
              <addLabel Res_data={restaurant} />
            ) : (
              <Res_card Res_data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
