const express = require("express");
const { readFile } = require("fs").promises;

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (_request, response) => {
  try {
    const homePagePath = __dirname + "/home.html";
    const html = await readFile(homePagePath, "utf-8");
    response.status(200).send(html);
  } catch (error) {
    response.status(500).send("Sorry, out of order!");
  }
});

app.listen(port, () =>
  console.log(`⚡ Available at http://localhost:${port}/`)
);
