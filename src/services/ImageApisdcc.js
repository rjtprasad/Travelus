import conf from "../config/env_config";
import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
  headers: {
    "Content-Type": "Application/json",
    "X-Goog-Api-Key": conf.GOOGLE_PLACE_API_KEY,
    "X-Goog-FieldMask": ["places.photos", "places.displayName", "places.id"],
  },
};

// export const GetPlaceDetails = async (data) => {
//   const response = axios.post(BASE_URL, data, config)
//   console.log(BASE_URL, data, config);

//   // const img_url = IMG_URL.replace(
//   //   "{NAME}",
//   //   response?.data?.places[0]?.photos[3]?.name
//   // );
//   return IMG_URL.replace("{NAME}", response?.data?.places[0]?.photos[4]?.name);
// };

export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);
