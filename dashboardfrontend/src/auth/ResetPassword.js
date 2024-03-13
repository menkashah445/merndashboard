// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "../config/axiosConfig.js";
// import { toast } from "react-toastify";

// const ResetPassword = () => {
//   const formik = useFormik({
//     initialValues: {
//       newPassword: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       newPassword: Yup.string()
//         .required("New Password is required")
//         .min(6, "Password must be at least 6 characters"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const { newPassword } = values;
//         const token = window.location.pathname.split("/").pop();

//         const response = await axios.post(`users/reset-password/${token}`, {
//           newPassword,
//         });
//         if (response.status === 200) {
//           toast.success(response.data.message);
//           setTimeout(() => {
//             window.location.href = "/signin";
//           }, 3000);
//         } else {
//           toast.error("Failed to reset password");
//         }
//       } catch (error) {
//         if (error.response.status === 404) {
//           toast.error("Your link has expired");
//         } else {
//           toast.error("Server error");
//         }
//       }
//     },
//   });

//   return (
//     // JSX for ResetPassword component
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="newPassword">New Password</label>
//       <input
//         id="newPassword"
//         name="newPassword"
//         type="password"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.newPassword}
//       />
//       {formik.touched.newPassword && formik.errors.newPassword ? (
//         <div>{formik.errors.newPassword}</div>
//       ) : null}

//       <label htmlFor="confirmPassword">Confirm Password</label>
//       <input
//         id="confirmPassword"
//         name="confirmPassword"
//         type="password"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.confirmPassword}
//       />
//       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//         <div>{formik.errors.confirmPassword}</div>
//       ) : null}

//       <button type="submit">Reset Password</button>
//     </form>
//   );
// };

// export default ResetPassword;
