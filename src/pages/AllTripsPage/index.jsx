import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import TripCard from "./TripCard";
import { useAuth0 } from "@auth0/auth0-react";
import AllTripsLoader from "./AllTripsLoader";

const AllTrips = () => {
  const [userTrips, setUserTrips] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);

  const getUserTrips = async () => {
    // setLoading(true);
    if ((user, isAuthenticated)) {
      try {
        // query firestore
        const q = query(
          collection(db, "TravelPlans"),
          where("userEmail", "==", user?.email)
        );
        setUserTrips([]);
        // get all trips of user
        const userTrips = await getDocs(q);
        userTrips.forEach((trip) => {
          setUserTrips((prevTrips) => [...prevTrips, trip.data()]);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getUserTrips();
  }, [user]);

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56 flex flex-col mt-16 w-full h-screen absolute z-10">
      <h2 className="font-bold text-3xl">All Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <AllTripsLoader key={index} />
            ))
          : userTrips.map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
      </div>
    </div>
  );
};

export default AllTrips;
