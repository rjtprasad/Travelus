import { useRef } from "react";
import conf from "@/config/env_config";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { Input } from "@/components/ui/input";

const libraries = ["places"];

const PlaceInput = (formData, setFormData) => {
  const inputPlaceRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: conf.GOOGLE_PLACE_API_KEY,
    libraries,
  });

  console.log(formData);

  const handleOnPlacesChanged = () => {
    const address = inputPlaceRef.current.getPlaces();
    // handleInputChange("place", address);
    setFormData({
        ...formData,
        place: "address",
      });
  };

  return (
    <div>
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => (inputPlaceRef.current = ref)}
          onPlacesChanged={handleOnPlacesChanged}
        >
          <Input
            placeholder={"Enter Destination"}
            type="text"
            // onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </StandaloneSearchBox>
      )}
    </div>
  );
};

export default PlaceInput;
