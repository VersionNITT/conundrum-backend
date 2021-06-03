require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

const app = express();

// Passport Config
require("./config/passport")(passport);

// DB Config
const db = process.env.MONGOURI;

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
	session({
		secret: process.env.SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));

const PORT = process.env.PORT || 4080;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
