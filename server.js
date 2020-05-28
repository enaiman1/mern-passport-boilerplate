const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users")

const app = express();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB 🔌 connected 🤘"))
  .catch((err) => console.log(err));

  // Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


app.listen(port, () =>
  console.log(`🚀 Server is 🤙listening at 🧭 http://localhost:${port} `)
);
