import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Menu = () => {
  const { resId } = useParams();
  const resMenuData = useResMenu(resId);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1 className="text-red-500 text-center mt-4">Looks like you are Offline</h1>;
  if (resMenuData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenuData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-lg text-gray-700 mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="text-2xl font-semibold mb-2">Menu</h2>
      <ul className="list-disc list-inside">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="mb-2">
            <span className="font-medium">{item.card.info.name}</span> - Rs.
            <span className="text-gray-600">
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
