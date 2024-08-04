import DayPlans from "./DayPlans";
import PlaceCard from "./PlaceCard";
import PlaceLoader from "./PlaceLoader";

const PlacesInfo = ({ trip, loading }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Places to Visit</h2>

      {loading ? (
        Array.from({ length: 4 }).map((_, index) => <PlaceLoader />)
      ) : (
        <DayPlans trip={trip} />
      )}
    </div>
  );
};

export default PlacesInfo;
