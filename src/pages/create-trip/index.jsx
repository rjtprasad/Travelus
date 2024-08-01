import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInDialog from "../../components/custom/SignInDialog";
import conf from "@/config/env_config";
import { BudgetOptions, TravelerOptions } from "@/constants/option";
import { generateTravelPrompt } from "../../geminiAi/generateTravelPrompt";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { generateTrip } from "../../services/generateTrip";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UserContext } from "@/context";
import PlaceInput from "./PlaceInput";




const CreateTrip = () => {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({place: "Jammu"});
  const [travelPrompt, setTravelPrompt] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);


  console.log(formData);
 
  
  
  

  const onGenerateTrip = async () => {
    console.log("I am Loading");
    // const user = localStorage.getItem("user");
    // console.log(isSignIn);
    const prompt = generateTravelPrompt(formData);
    // setTravelPrompt(()=>prompt)
    console.log(prompt);

    setTravelPrompt(prompt);
    console.log(travelPrompt)

    if (!user.isSignIn && prompt) {
      setOpenDialog(true);
    }
    // else {
    //   setLoading(true);
    //   const docId = "1722103930808";
    //   // const docId = Date.now().toString();
    //   // await generateTrip(travelPrompt, docId, formData);
    //   setLoading(false);
    //   navigate(`/view-trip/${docId}`);
    // }

    (await user.isSignIn) && travelPrompt && saveTrip();

    console.log("sdfvf");
  };

  //

  //

  const saveTrip = async () => {
    console.log("I am Loadingin after login");
    console.log(travelPrompt);
    setLoading(true);
    // const docId = "1722103930808";

    const docId = Date.now().toString();
    await generateTrip(travelPrompt, docId, formData);
    // setTravelPrompt(null)
    setLoading(false);
    navigate(`/view-trip/${docId}`);
    
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-32 absolute z-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          {/* <GooglePlacesAutocomplete
            apiKey={conf.GOOGLE_PLACE_API_KEY}
            selectProps={{
              placeholder: "Enter Destination",
              place,
              onChange: (v) => {
                // setPlace(v);
                handleInputChange("place", v);
              },
            }}
          /> */}
          <PlaceInput formData={formData} setFormData={setFormData}/>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex. 3"}
            type="number"
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {BudgetOptions.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                  formData?.budget == item.title && "shadow-lg border-black"
                }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h1 className="text-4xl">{item.icon}</h1>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <h1 className="text-sm text-gray-500">{item.description}</h1>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {TravelerOptions.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                  formData?.peoples == item.people && "shadow-lg border-black"
                }`}
                onClick={() => {
                  handleInputChange("peoples", item.people);
                }}
              >
                <h1 className="text-4xl">{item.icon}</h1>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <h1 className="text-sm text-gray-500">{item.description}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Button onClick={() => onGenerateTrip()}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-5 w-5 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <SignInDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default CreateTrip;
