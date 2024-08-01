import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApp from "../../hook/useApp";
import InfoSection from "./InfoSection";
import HotelsInfo from "./HotelsInfo";
import PlacesInfo from "./PlacesInfo";

const ViewTrip = () => {
  const { tripId } = useParams();
  const { getTrip } = useApp();
  const [trip, setTrip] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTripData = async () => {
    setLoading(true);
    const tripData = await getTrip(tripId);
    setTrip(tripData);
    setLoading(false);
  };

  useEffect(() => {
    getTripData();
  }, []);


  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56 flex flex-col gap-5 mt-24 absolute z-10">
      <InfoSection trip={trip} />
      <HotelsInfo trip={trip} />
      <PlacesInfo trip={trip} />
    </div>
  );
};

export default ViewTrip;
