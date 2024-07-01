import { CDN_URL } from "../utils/constants";

const Res_card = (props) => {
  const { Res_data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName, veg } =
    Res_data.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating ? avgRating + " stars" : "No-ratings"}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
      <h5>{areaName}</h5>
      <h5>{sla.lastMileTravelString}</h5>
      <h5>{veg === true ? "Pure-Veg" : "Non-veg"}</h5>
    </div>
  );
};
export default Res_card;
