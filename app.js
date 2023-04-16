const express = require("express");
const app = express();

const sendMail = require("./controllers/sendMail")

app.get("/", function(request, response){
  response.send("<h1>Hello</h1>");
});

app.get("/mail", sendMail);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});