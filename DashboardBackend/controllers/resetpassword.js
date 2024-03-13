//  const resetPassword = async (req, res) => {
//     try {
//       // Verify the token sent by the user
//       const decodedToken = jwt.verify(
//         req.params.token,
//         process.env.SECRET_KEY
//       );
  
//       // If the token is invalid, return an error
//       if (!decodedToken) {
//         return res.status(401).send({ message: "Invalid token" });
//       }
  
//       // find the user with the id from the token
//       const user = await User.findOne({ _id: decodedToken.userId });
//       if (!user) {
//         return res.status(401).send({ message: "no user found" });
//       }

//        // Hash the new password
//     const salt = await bycrypt.genSalt(10);
//     req.body.newPassword = await bycrypt.hash(req.body.newPassword, salt);

//     // Update user's password, clear reset token and expiration time
//     user.password = req.body.newPassword;
//     await user.save();

//     // Send success response
//     res.status(200).send({ message: "Password updated" });
//   } catch (err) {
//     // Send error response if any error occurs
//     res.status(500).send({ message: err.message });
//   }
// };

// module.exports = { resetPassword  };
