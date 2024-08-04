import conf from "@/config/env_config";
import placeholder from "../../assets/placeholder.jpg";
import calendar from "../../assets/calendar.svg";
import wallet from "../../assets/wallet.svg";
import group from "../../assets/group.svg";
import { GetPlaceDetails } from "@/services/ImageApisdcc";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const [imgUrl, setImgUrl] = useState();
  // console.log(trip);

  // useEffect(() => {
  //   trip && GetPlacePhoto();
  // }, [trip]);

  // const GetPlacePhoto = async () => {
  //   // const data = { textQuery: trip?.userSelection?.place?.label };
  //   const data = { textQuery: trip?.userSelection?.place };
  //   await GetPlaceDetails(data).then((resp) => {
  //     const img_id = resp?.data?.places[0]?.photos[4]?.name;
  //     const photo_url = img_id
  //       ? `https://places.googleapis.com/v1/${img_id}/media?maxHeightPx=1000&maxWidthPx=1000&key=${conf.GOOGLE_PLACE_API_KEY}`
  //       : "";
  //     setImgUrl(photo_url);
  //   });
  // };

  return (
    <Link to={``}>
      <div className="p-2 border bg-slate-50 rounded-lg hover:scale-105 hover:shadow-md transition-all cursor-pointer">
        <img
          src={imgUrl ? imgUrl : placeholder}
          alt="trip_info"
          className="h-[200px] w-full object-cover rounded-lg"
        ></img>
        <div className="my-2 flex flex-col gap-1">
          <h2 className="font-bold text-lg text-gray-600">
            {trip?.userSelection?.place}
          </h2>
          <div className="flex gap-5 justify-between pr-2">
            <div className="flex gap-1 items-center p-1  justify-center text-gray-900">
              <img src={calendar} alt="calendar" className="w-4 h-4" />
              <span className="text-sm font-medium">{trip?.userSelection?.days} Days</span>
            </div>
            <div className="flex gap-1 items-center p-1  justify-center text-gray-900 xs:text-xs sm:text-sm md:text-md">
              <img src={wallet} alt="calendar" className="w-4 h-4" />
              <span className="text-sm font-medium">{trip?.userSelection?.budget}</span>
            </div>
            <div className="flex gap-1 items-center p-1  justify-center  rounded-full text-gray-900 xs:text-xs sm:text-sm md:text-md">
              <img src={group} alt="calendar" className="w-4 h-4" />
              <span className="text-sm font-medium">{trip?.userSelection?.peoples}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
