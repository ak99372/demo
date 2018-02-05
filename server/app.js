var express = require("express");
var path = require("path");
var authRoutes = require("./routes/auth-routes");
var profileRoutes = require("./routes/profile-routes");

require("./passport-setup");
var mongoose = require("mongoose");
var config = require("./config");
var passport = require('passport')
var cookieSesion = require('cookie-session');
mongoose.Promise = global.Promise;

const app = express();
const viewPath = path.join(__dirname, "/views");

app.set("view engine", "ejs");
app.set("views", viewPath);

app.use(cookieSesion({
	maxAge: 60 * 60 * 1000,
	keys: [config.session.cookieKey]

}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);


//connect to DB
mongoose.connect(config.mongodb.dbURl, {
	connectTimeoutMS: 1000
}, function (err) {
	console.log("Connection to DB:" + err);
});

app.get("/", (req, res) => {
	res.render("index", {
		user: req.user
	});
});
app.get("/2", (req, res) => {
	res.render("index");
});

app.listen(3000, () => {
	console.log("Views Served From:" + viewPath);
	console.log("Application listening at http://localhost:3000");
});