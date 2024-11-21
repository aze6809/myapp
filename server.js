const express = require("express");
const app = express();

const room = require("./routes/securedroom");

app.get("/", (req, res, next) => {
  console.log("Test");
  res.sendFile(__dirname + '/routes/views/index.html');
 
});

//need to go to auth page HERE
app.post(`/submit`, (req, res) => {
  const data = req.body;
  res.next();
 console.log(data);
 //res.sendFile(__dirname + '/routes/views/hero_route.html');
})


app.use("/room", room);

app.listen(3000);
