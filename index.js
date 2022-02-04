const express = require("express");
const { readFile } = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  readFile("./home.html", "utf-8", (err, html) => {
    if (err) {
      response.status(500).send("Sorry, out of order!");
    }

    response.send(html);
  });
});

app.listen(port, () => console.log(`Available at http://localhost:${port}/`));
