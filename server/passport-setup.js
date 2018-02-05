const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("./config");
const UserModel = require("./models/user-model");

passport.use(new GoogleStrategy({
		clientID: config.google.clientID,
		clientSecret: config.google.clientSecret,
		callbackURL: "/auth/google/redirect",
		scope: ["profile"]
	},
	function (accessToken, refreshToken, profile, done) {
		console.log(profile);
		LoadCurrentUser(profile, done);
	}
));

///cookie store user Id
passport.serializeUser((id, done) => {
	done(null, id);
});


///cookie comes back with Id
passport.deserializeUser((id, done) => {
	UserModel.findById(id).then(user => {
		done(null, user);
	})
});

function LoadCurrentUser(profile, done) {
	var userObj = profile._json;
	let user = new UserModel({
		username: userObj.displayName,
		googleId: userObj.id,
		imageUrl: userObj.image.url
	});
	UserModel
		.findOne({
			googleId: profile.id //where googleId = id
		})
		.then(userRecord => {
			if (userRecord) {
				//already exists
				console.log("User Already Exists Id:" + userRecord._id);
				done(null, userRecord);
			} else {
				user.save().then(newUser => {
					console.log("New User Created" + newUser);
					done(null, newUser);
				});
			}
		});
}