require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const gameRoute = require("./routes/game");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/game", gameRoute);

app.get("/", async (req, res) => {
    res.send("Welcome to our backend");
})

app.listen(PORT, async () => {
    await connect();
    console.log(`Listening on http://localhost:${PORT}`);
})