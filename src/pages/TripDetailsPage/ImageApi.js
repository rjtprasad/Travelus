import conf from "@/config/env_config";
import axios from "axios";

const GetImageUrl = async (placeName) => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        params: {
          place_id: placeName,
          key: conf.GOOGLE_PLACE_API_KEY,
        },
      }
    );
    return response.data.result.photos || [];
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error;
  }
};

export default GetImageUrl;
