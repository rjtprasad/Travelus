import conf from "@/config/env_config";
import placeholder from "../../assets/placeholder.jpg";
import { GetPlaceDetails } from "@/services/ImageApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PrevTripCard = ({ trip }) => {
  const [imgUrl, setImgUrl] = useState();
  console.log(trip);

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    // const data = { textQuery: trip?.userSelection?.place?.label };
    const data = { textQuery: trip?.userSelection?.place };
    await GetPlaceDetails(data).then((resp) => {
      const img_id = resp?.data?.places[0]?.photos[4]?.name;
      const photo_url = img_id
        ? `https://places.googleapis.com/v1/${img_id}/media?maxHeightPx=1000&maxWidthPx=1000&key=${conf.GOOGLE_PLACE_API_KEY}`
        : "";
      setImgUrl(photo_url);
    });
  };

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="p-3 border rounded-lg hover:scale-105 hover:shadow-md transition-all cursor-pointer">
        <img
          src={imgUrl ? imgUrl : placeholder}
          className="object-cover rounded-lg"
        ></img>
        <div>
          <h2 className="font-bold text-lg">
            {/* {trip?.userSelection?.place.label} */}
            {trip?.userSelection?.place}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.days} days trip with{" "}
            {trip?.userSelection?.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default PrevTripCard;
