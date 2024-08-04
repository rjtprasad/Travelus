import * as yup from "yup"

export const tripSchema = yup.object().shape({
    place: yup.string().required("Please Enter Place Detail."),
    days: yup.number().positive().integer().required("Please Enter Days Detail."),
    budget: yup.string().required("Please Enter Budget Deatil."),
    peoples: yup.string().required("Please Enter Peoples Detail."),
})