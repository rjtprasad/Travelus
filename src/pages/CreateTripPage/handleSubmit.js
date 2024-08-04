import { chatSession } from "@/geminiAi/GeminiApi";
import { doc, setDoc } from "firebase/firestore";
import { promptTemplate } from "@/constants/option";
import { db } from "@/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const onSubmit = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  return async (values) => {
    // generating travel prompt
    const travelPrompt = promptTemplate
      .replaceAll("{place}", values.place)
      .replaceAll("{days}", values.days)
      .replaceAll("{peoples}", values.peoples)
      .replaceAll("{budget}", values.budget);

    console.log(travelPrompt);

    try {
      //generating travel data using Google Gemini AI
      //   const travelData = await chatSession.sendMessage(travelPrompt);
      //   console.log(travelData?.response?.text());

      //saving travel data to firestore
      //   const docId = Date.now().toString();
      const docId = "1722582306906";
      //   await setDoc(doc(db, "TravelPlans", docId), {
      //     travelId: docId,
      //     userEmail: user.email,
      //     userSelection: values,
      //     travelData: JSON.parse(travelData?.response?.text())
      //   });
      console.log("Saved to FireStore");

      // navigating to travel details page
      navigate(`/travel-details/${docId}`);
    } catch (error) {
      console.log(error);
    }
  };
};
