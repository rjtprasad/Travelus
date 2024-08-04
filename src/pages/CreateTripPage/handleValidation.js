import { toast } from "sonner";

export const validate = (values) => {
  const errors = {};

  if (!values.place && !values.days && !values.budget && !values.peoples) {
    errors.place = "Enter Place";
    errors.days = "Enter Days";
    errors.budget = "Enter Budget";
    errors.peoples = "Enter Peoples";
    toast("Enter Trip Details");
    return errors;
  }

  if (!values.place) {
    errors.place = "Enter Place";
    toast("Enter Place");
    return errors;
  }

  if (!values.days) {
    errors.days = "Enter Days";
    toast("Enter Days");
    return errors;
  }
  if (!values.budget) {
    errors.budget = "Enter Budget";
    toast("Enter Budget");
    return errors;
  }
  if (!values.peoples) {
    errors.peoples = "Enter Peoples";
    toast("Enter Peoples");
    return errors;
  }

  return errors;
};
