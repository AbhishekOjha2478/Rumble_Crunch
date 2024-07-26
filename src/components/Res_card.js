import { CDN_URL } from "../utils/constants";

const Res_card = (props) => {
  const { Res_data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName, veg } = Res_data.info;
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center hover:shadow-black transition-all duration-500 ease-in-out transform hover:scale-100">
      <img
        className="w-full h-40 object-cover rounded-t-lg transition-all duration-500 ease-in-out"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <h5 className="text-gray-600">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-600 font-bold">
          {avgRating ? `${avgRating} ⭐` : "No ratings"}
        </h5>
        <h5 className="text-gray-600">{sla.deliveryTime} minutes</h5>
        <h5 className="text-gray-600">{areaName}</h5>
        <h5 className="text-gray-600">{sla.lastMileTravelString}</h5>
        <h5 className={`text-gray-600`}>
          {veg === true ? "veg 🟢" : "Non-veg 🔴"}
        </h5>
      </div>
    </div>
  );
};

export const addLabel = (Res_card) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <Res_card {...props} />
      </div>
    );
  };
};

export default Res_card;
