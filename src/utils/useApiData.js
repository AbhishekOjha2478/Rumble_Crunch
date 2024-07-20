import { useState,useEffect } from "react";
import { SWIGGY_API } from "./constants";

const useApiData = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //  fetching data from swiggy live API
    const data = await fetch(SWIGGY_API);
    // changing data to json
    const json = await data.json();

    console.log(json);
    // As resList was an array having list of restaurants so we will give the path till restaurants list in fetched data
    //optional chaining using .?
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resList;
};

export default useApiData;
