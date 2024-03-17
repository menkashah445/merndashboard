const express = require("express");
const connectDB = require("./db");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
// const forgotPasswordRouter = require("./routes/forgotPassword.js");

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// Initialize Passport and session management
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//     User.findOne({ email: email }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: "Incorrect email." });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: "Incorrect password." });
//       }
//       return done(null, user);
//     });
//   })
// );

const app = express();
const PORT = process.env.PORT || 8000;

// Allow requests from localhost:3000
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use("/auth", authRoutes);

// Define user routes
app.use("/user", userRoutes);

// app.use("/forgotpassword", forgotPasswordRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
