import { prompt } from "../constants/option";
import { toast } from "sonner";

export const generateTravelPrompt = (formData) => {

  const checkForm = () => {
    if (formData.length == 0) {
      toast("Please Fill Travel Details");
      return false;
    }
    // if (!formData?.place) {
    //   toast("Please Fill Destination Details.");
    //   return false;
    // }
    if (!formData?.days) {
      toast("Please Fill Days Details.");
      return false;
    }
    if (!formData?.budget) {
      toast("Please Fill Budget Details.");
      return false;
    }
    if (!formData?.peoples) {
      toast("Please Fill Peoples Details.");
      return false;
    }
    return true
  };

  const travelPrompt = checkForm() && prompt
    // .replace("{place}", formData?.place?.label)
    .replace("{place}", "Jammu")
    .replace("{days}", formData?.days)
    .replace("{peoples}", formData?.peoples)
    .replace("{budget}", formData?.budget)
    .replace("{days}", formData?.days);

  return travelPrompt;
};
