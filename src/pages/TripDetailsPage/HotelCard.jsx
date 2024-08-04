import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import { RiMapPin2Fill } from "react-icons/ri";
import { GetPlaceDetails } from "@/services/ImageApisdcc";
import { useEffect, useState } from "react";
import conf from "../../config/env_config";
import money from "../../assets/money.svg";


const HotelCard = ({ hotel }) => {
  const [imgUrl, setImgUrl] = useState();

  // useEffect(() => {
  //   hotel && GetPlacePhoto();
  // }, [hotel]);

  // const GetPlacePhoto = async () => {
  //   const data = { textQuery: hotel?.name };
  //   await GetPlaceDetails(data).then((resp) => {
  //     const img_id = resp?.data?.places[0]?.photos[4]?.name;
  //     const photo_url = img_id
  //       ? `https://places.googleapis.com/v1/${img_id}/media?maxHeightPx=1000&maxWidthPx=1000&key=${conf.GOOGLE_PLACE_API_KEY}`
  //       : "";
  //     setImgUrl(photo_url);
  //   });
  // };

  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel?.name +
          "," +
          hotel?.address
        }
        target="_blank"
      >
        <div className="p-2 border bg-slate-50 rounded-lg hover:scale-105 hover:shadow-md transition-all cursor-pointer">
          <div className="relative">
            <img
              src={imgUrl ? imgUrl : placeholder}
              alt="hotel_image"
              className="h-[200px] w-full object-cover rounded-lg"
            />
            <div className=" text-overlay absolute right-3 bottom-3 inline-flex gap-1 items-center rounded-sm bg-white p-1 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="text-slate-500 mr-1 text-xs">
                {hotel?.rating}
              </span>
            </div>
          </div>

          <div className="my-2 flex flex-col gap-1">
            <h2 className="font-bold text-gray-600 line-clamp-1 mr-2">{hotel?.name}</h2>
            <div className="flex items-center">
              <svg
                className="h-3 w-3 text-blue-500 fill-current mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 gap-1 items-center line-clamp-1 mr-2">
                {hotel?.address}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={money} alt="money" className="w-3 h-4" />
              <p className="text-sm text-gray-700">{hotel?.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
