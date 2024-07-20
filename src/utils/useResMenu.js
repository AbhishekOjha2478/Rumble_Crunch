import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useResMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenuData(json);
    // console.log(json);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return resMenuData;
};

export default useResMenu;
