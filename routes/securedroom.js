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

router.get("/", (req, res) => {
  console.log("In room");
  res.send("This is a new room");
});

module.exports = router;
