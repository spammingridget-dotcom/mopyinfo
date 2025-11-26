const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const DISCORD_WEBHOOK = "http://localhost:3001/send"; // This goes to your bot

app.post("/submit", async (req, res) => {
    await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
    });

    res.send("<h1>Form Submitted! I will DM you shortly.</h1>");
});

app.listen(3000, () => console.log("Form server running on port 3000"));
