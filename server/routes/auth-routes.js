const router = require("express").Router();
const passport = require("passport");

//auth login
router.get("/login", (req, res) => {
  res.render("login");
});

//logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect('/');
});

//auth google
router.get("/google", passport.authenticate("google", {
  scope: ["profile"]
}));

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect('/profile/');
});

module.exports = router;