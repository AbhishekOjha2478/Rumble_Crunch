import Res_card from "./Res_card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //  fetching data from swiggy live API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // changing data to json
    const json = await data.json();

    console.log(json);
    // As resList was an array having list of restaurants so we will give the path till restaurants list in fetched data
    //optional chaining using .?
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  if (resList.length === 0) {
    return <Shimmer />;
  }

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
