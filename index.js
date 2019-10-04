/*
The science is just to keep spinning
because the big bang is only just beginning
and sometimes it's all that we can do
just to hang on.

--Ani di Franco--
*/

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const server = express();
const router = require("./data/helpers/router.js");
server.use(express.json());
server.use(cors());
server.use("/api/projects", router);

server.get("/", (req, res) => {
    res.send("<h2>Julie was here</h2>")
})

// const port = process.env.PORT || 1111;
const port = 4321;

server.listen(port, () => {
    console.log("Woohoo!!!")
})


