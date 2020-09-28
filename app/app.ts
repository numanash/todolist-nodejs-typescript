import express = require("express");

let port: Number | String = process.env.PORT ? process.env.PORT : 5000;
const app: express.Application = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
