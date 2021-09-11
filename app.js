require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const path = require("path");
const init = require("./init");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

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
app.use(express.static(path.resolve(__dirname, "public/build")));

// Express session
app.use(
	session({
		secret: process.env.SECRET,
		saveUninitialized: true,
		unset: "destroy",
		cookie: {
			maxAge: new Date(Date.now() + 10800 * 1000),
		},
		store: MongoStore.create({
			mongoUrl: process.env.MONGOURI,
			collectionName: "sessions",
		}),
		resave: true,
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
	res.sendFile(path.resolve("public/build/index.html"));
});

app.use("/setup", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));
app.use("/api", eventStarted, require("./routes/api"));

const PORT = process.env.PORT || 4080;

app.listen(PORT, () => {
	rl.question("Enter Event Secret: ", function (secret) {
		rl.question("Enter Event duration in minutes: ? ", function (min) {
			const duration = min * 60 * 1000;
			if (secret === process.env.STARTSECRET) {
				const startTime = Date.now();
				const endTime = startTime + duration;
				process.env.startTime = startTime;
				process.env.endTime = endTime;

				console.log("Event started");
				console.log(`Start time: ${startTime}`);
				console.log(`End time: ${endTime}`);
				console.log(`Duration: ${duration}`);

				console.log(`Server running on  ${PORT}`);
			}
			rl.close();
		});
	});
});

function eventStarted(req, res, next) {
	if (process.env.startTime && process.env.endTime) {
		const currentTime = Date.now();
		if (
			currentTime < process.env.startTime ||
			currentTime > process.env.endTime
		) {
			res.status(403).json({ error: "Event has not yet started" });
		} else {
			next();
		}
	} else {
		res.status(403).json({ error: "Event has not yet started" });
	}
}

module.exports = app;
