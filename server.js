const express = require("express");
const app = express();

const room = require("./routes/securedroom");

app.get("/", (req, res) => {
  console.log("Test");
  res.send("Main Room");
});

app.use("/room", room);

app.listen(3000);
