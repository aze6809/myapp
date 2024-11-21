const express = require("express");
const router = express.Router();

const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized User" });
  }

  const password = "supersecurepassword";

  if (authHeader !== password) {
    return res.status(403).json({ error: "Invalid Password" });
  }
  next();
};
router.use(isAuth);

//display winning text without directing to HTML page
router.get("/hero", (req, res) => {
  console.log("In room");
  res.send(`<p>You open the door. You're granted a magical sword. The hero continues their journey and eventually escapes.</p>`);
});
//display losing text without directing to HTML page
router.get("/villain", (req, res) => {
  console.log("In room");
  res.send(`<p>You open the door. You're immediately hit with a wall of fire. The villain has been slain. Your journey is over.</p>`);
});

module.exports = router;
