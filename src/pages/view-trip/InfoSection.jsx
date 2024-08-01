import { Button } from "@/components/ui/button";
import placeholder from "../../assets/placeholder.jpg";
import { SiGooglemaps   } from "react-icons/si";
import { GetPlaceDetails } from "../../services/ImageApi";
import { useEffect, useState } from "react";
import conf from "../../config/env_config";
import { Link } from "react-router-dom";
import calendar from "../../assets/calendar.svg";
import wallet from "../../assets/wallet.svg";
import group from "../../assets/group.svg";

const InfoSection = ({ trip }) => {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = { textQuery: trip?.userSelection?.place?.label };
    await GetPlaceDetails(data).then((resp) => {
      const img_id = resp?.data?.places[0]?.photos[4]?.name;
      const photo_url = img_id
        ? `https://places.googleapis.com/v1/${img_id}/media?maxHeightPx=1000&maxWidthPx=1000&key=${conf.GOOGLE_PLACE_API_KEY}`
        : "";
      setImgUrl(photo_url);
    });
  };

  return (
    <div>
      <img
        src={imgUrl ? imgUrl : placeholder}
        alt="banner_image"
        className="h-[340px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.place?.label}
          </h2>

          <div className="flex gap-5">
            <div className="flex gap-1 items-center p-1 px-3 justify-center bg-gray-200 rounded-full text-gray-900 xs:text-xs sm:text-sm md:text-md">
              <img src={calendar} alt="calendar" className="w-4 h-4" />
              <span>{trip?.userSelection?.days} Days</span>
            </div>
            <div className="flex gap-1 items-center p-1 px-3 justify-center bg-gray-200 rounded-full text-gray-900 xs:text-xs sm:text-sm md:text-md">
              <img src={wallet} alt="calendar" className="w-4 h-4" />
              <span>{trip?.userSelection?.budget} Budget</span>
            </div>
            <div className="flex gap-1 items-center p-1 px-3 justify-center bg-gray-200 rounded-full text-gray-900 xs:text-xs sm:text-sm md:text-md">
              <img src={group} alt="calendar" className="w-4 h-4" />
              <span>{trip?.userSelection?.peoples}</span>
            </div>
          </div>
        </div>
        <Link
          to={
            "https://www.google.com/maps/search/?api=1&query=" +
            trip?.userSelection?.place?.label
          }
          target="_blank"
        >
          <Button>
            <SiGooglemaps  className="h-6 w-6"/>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InfoSection;
