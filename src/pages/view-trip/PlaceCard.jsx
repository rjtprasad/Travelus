import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/services/ImageApi";
import ticket from "../../assets/ticket.svg";
import conf from "../../config/env_config";

const PlaceCard = ({ place }) => {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = { textQuery: place?.name };
    await GetPlaceDetails(data).then((resp) => {
      const img_id = resp?.data?.places[0]?.photos[1]?.name;
      const photo_url = img_id
        ? `https://places.googleapis.com/v1/${img_id}/media?maxHeightPx=1000&maxWidthPx=1000&key=${conf.GOOGLE_PLACE_API_KEY}`
        : "";
      setImgUrl(photo_url);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.name}
      target="_blank"
    >
      <div className="border bg-slate-50 rounded-lg p-1 mt-2 flex gap-5 cursor-pointer hover:scale-105 hover:shadow-md transition-all">
        <img
          src={imgUrl ? imgUrl : placeholder}
          className="w-[100px] h-[100px] object-cover rounded-lg"
        />
        <div>
          <div className="flex justify-between mr-3">
            <h2 className="font-bold text-gray-600 text-sm mt-1">
              {place?.name}
            </h2>
            <div className="flex items-center gap-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs">{place.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1">
            {place.details}
          </p>

          <div className="flex gap-1 items-center mt-1">
            <img src={ticket} alt="money" className="w-4 h-4" />
            <span className="text-xs text-gray-700">{place?.ticketPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
