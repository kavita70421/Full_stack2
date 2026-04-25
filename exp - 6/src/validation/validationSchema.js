import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
  age: yup.number().required("Age is required")
});