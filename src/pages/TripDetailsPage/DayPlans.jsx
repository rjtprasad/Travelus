import PlaceCard from "./PlaceCard";

const DayPlans = ({ trip }) => {
  return (
    <div>
      {trip?.travelData?.itinerary?.map((item, index) => (
        <div key={index}>
          <h2 className="font-medium text-[15px] text-gray-900 mt-5">
            Day {item.day} : {item.description}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {item.places.map((place, index) => (
              <div key={index} className="my-1">
                <h2 className="font-medium text-sm text-orange-500">
                  {place.time}
                </h2>
                <PlaceCard place={place} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayPlans;
