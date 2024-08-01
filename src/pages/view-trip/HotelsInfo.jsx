import HotelCard from "./HotelCard";

const HotelsInfo = ({ trip }) => {
    
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 mt-3">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel}/>
        ))}
      </div>
    </div>
  );
};

export default HotelsInfo;
