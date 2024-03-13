// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "../config/axiosConfig.js";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post("auth/ForgotPassword", values);
//         if (response.status === 200) {
//           toast.success("Email sent successfully");
//         } else {
//           toast.error("Failed to send email");
//         }
//       } catch (error) {
//         if (error.response.status === 404) {
//           toast.error("Email not found");
//         } else {
//           toast.error("Server error");
//         }
//       }
//     },
//   });

//   return (
//     // JSX for ForgetPassword component
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ForgotPassword;
