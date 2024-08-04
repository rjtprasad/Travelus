import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoSection from "./InfoSection";
import HotelsInfo from "./HotelsInfo";
import PlacesInfo from "./PlacesInfo";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import InfoSectionLoader from "./InfoSectionLoader";

const TripDetails = () => {
  const [loading, setLoading] = useState(true);
  const [travelPlan, setTravelPlan] = useState();
  const { tripId } = useParams();

  // get travel details from firestore
  const getTravelDetails = async () => {
    // setLoading(true);
    try {
      const travelDetails = await getDoc(doc(db, "TravelPlans", tripId));
      if (travelDetails.exists()) {
        setTravelPlan(travelDetails.data());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTravelDetails();
  }, []);

  return (
    <div className="p-10 w-full md:px-20 lg:px-44 xl:px-56 flex flex-col gap-5 mt-28 absolute z-10">
      {loading ? <InfoSectionLoader /> : <InfoSection trip={travelPlan} />}

      <HotelsInfo trip={travelPlan} loading={loading} />

      <PlacesInfo trip={travelPlan} loading={loading} />
    </div>
  );
};

export default TripDetails;
