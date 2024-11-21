const express = require("express");
const app = express();

const room = require("./routes/securedroom");

app.get("/", (req, res) => {
  console.log("Test");
  res.send(`<p>You're in a maze and you've come to a dead end. There's only a door and a device to enter a password. 

    It looks like you're supposed to enter your name and your role.</p>
<form name="alignmentCheck" action="/submit" method="post">
       <input type="radio" id="hero" name="hero" value="hero">
        <label for="hero">Hero</label><br>
        <input type="radio" id="villain" value="villain">
        <label for="villain">Villain</label><br>
        <input type="submit" value="Submit">
    </form>`);
});

//need to go to auth page HERE
app.post(`/submit`, (req, res) => {
 // res.sendFile(__dirname + '/routes/securedroom.js');
 //res.sendFile(__dirname + '/routes/views/hero_route.html');
})

app.use("/room", room);

app.listen(3000);
