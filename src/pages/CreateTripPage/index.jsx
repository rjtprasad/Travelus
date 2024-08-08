import { BudgetOptions, TravelerOptions } from "@/constants/option";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { onSubmit } from "./handleSubmit";
import { validate } from "./handleValidation";

const initialValues = {
  place: "",
  days: "",
  budget: "",
  peoples: "",
  travelerType: "",
};

const CreateTrip = () => {
  const { values, handleChange, setFieldValue, handleSubmit, isSubmitting } =
    useFormik({
      initialValues,
      validate,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: onSubmit(),
    });

  console.log(values);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-32 absolute z-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-700 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mt-20 flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="place" className="text-xl my-3 font-medium">
              What is destination of choice?
            </label>

            <Input
              type="text"
              id="place"
              placeholder="Enter Destination"
              value={values.place}
              onChange={handleChange}
              className="bg-gray-50 border-gray-300 text-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="days" className="text-xl my-3 font-medium">
              How many days are you planning your trip?
            </label>
            <Input
              type="number"
              id="days"
              placeholder="Ex. 3"
              value={values.days}
              onChange={handleChange}
              className="bg-gray-50 border-gray-300 text-md"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
            <div className="grid grid-cols-3 gap-5 mt-1">
              {BudgetOptions.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer bg-gray-50 border-gray-300 ${
                    values.budget == item.title
                      ? "shadow-lg border-gray-900 border-2"
                      : ""
                  }`}
                  onClick={() => setFieldValue("budget", item.title)}
                >
                  <h1 className="text-4xl">{item.icon}</h1>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <h1 className="text-sm text-gray-900">{item.description}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl my-3 font-medium">
              Who do you plan on traveling with on your next adventure?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-1">
              {TravelerOptions.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer bg-gray-50 border-gray-300 ${
                    values.peoples == item.people
                      ? "shadow-lg border-gray-900 border-2"
                      : ""
                  }`}
                  onClick={() => setFieldValue("peoples", item.people)}
                >
                  <h1 className="text-4xl">{item.icon}</h1>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <h1 className="text-sm text-gray-900">{item.description}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center my-10">
            <Button type="submit">
              {isSubmitting ? (
                <AiOutlineLoading3Quarters className="h-5 w-5 animate-spin" />
              ) : (
                "Generate Trip"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTrip;
