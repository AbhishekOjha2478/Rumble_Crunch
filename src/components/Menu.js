import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Menu = () => {
  const { resId } = useParams();
  const resMenuData = useResMenu(resId);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are Offline</h1>;
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
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
