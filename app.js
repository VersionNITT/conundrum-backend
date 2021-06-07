require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const init = require("./init");

// Passport Config
require("./config/passport")(passport);

// DB Config
const db = process.env.MONGOURI;

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB Connected");
		// init();
	})
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
		cookie: {
			maxAge: new Date(Date.now() + 10800 * 1000),
		},
		store: MongoStore.create({
			mongoUrl: process.env.MONGOURI,
			collectionName: "sessions",
		}),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 4080;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
