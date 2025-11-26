const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const bodyParser = require("body-parser");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
});

const app = express();
app.use(bodyParser.json());

const OWNER_ID = "YOUR_USER_ID";

client.on("ready", () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

app.post("/send", async (req, res) => {
    const owner = await client.users.fetch(OWNER_ID);

    const data = req.body;

    let msg = 
`📩 **New Commission Request**
━━━━━━━━━━━━━━━━━
👤 **Name:** ${data.name}
💬 **Discord:** ${data.discord}
🟦 **Roblox:** ${data.roblox}

💰 **Payment:** ${data.payment}
📄 **POP:** ${data.pop}
🔧 **Job:** ${data.job}

📌 **Type:** ${data.type}
━━━━━━━━━━━━━━━━━`;

    owner.send(msg)
        .then(() => res.send("DM Sent"))
        .catch(() => res.send("Error sending DM"));
});

app.listen(3001, () => console.log("Bot API running on 3001"));

client.login("YOUR_BOT_TOKEN");
