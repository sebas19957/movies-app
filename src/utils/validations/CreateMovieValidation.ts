import * as yup from "yup";

export default yup.object({
  title: yup.string().required("This field is required"),
  overview: yup.string().required("This field is required"),
  year: yup.string().required("This field is required"),
  rating: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
});
