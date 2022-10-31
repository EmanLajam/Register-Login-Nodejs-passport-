const express = require("express");
const passport = require("passport");
const router = express.Router();
require('../passportConfig')(passport);


router.post( "/signup",
     passport.authenticate("local-signup", { session: false }),
    (req, res, next) => {
    // sign up
    res.json({
    user: req.user,
    });
    });

router.post("/login",
    passport.authenticate("local-login", { session: false }),
    (req, res, next) => {
    // login

    res.json({
    message:"Welcome back"
    });
}
   );

module.exports = router;