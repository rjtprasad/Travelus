import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const useApp = () => {
  const createTrip = async (docId, formData, tripData) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await setDoc(doc(db, "AITrips", docId), {
        userSelection: formData,
        tripData: JSON.parse(tripData),
        userEmail: user?.email,
        id: docId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTrip = async (docId) => {
    try {
      const docRef = doc(db, "AITrips", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { createTrip, getTrip };
};

export default useApp;
