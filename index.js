const express = require("express");
const mongoose = require("mongoose");
const { MONGO_PASSWORD, MONGO_IP, MONGO_PORT, MONGO_USERNAME } = require("./config/config");

const postRouter = require("./routes/postRoutes")

const app = express();

mongoose
.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(() => console.log("Successfully connected to DB"))
.catch((e) => console.log(e));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h2>Hi There. What's up??!</h2>");
});

app.use("/api/v1/posts", postRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));