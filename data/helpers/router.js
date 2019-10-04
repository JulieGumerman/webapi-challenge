const express = require("express");
const router = express.Router();
const actions = require("./actionModel");
const projects = require("./projectModel");

router.get("/", (req, res) => {
    projects.get()
        .then(data => res.json(data))
        .catch(res => res.json({message: "oops"}))
} )

router.get("/:id", (req, res) => {
    const { id } = req.params;
    projects.get(id)
        .then(data => res.json(data))
        .catch(error => res.json({ message: "oh nos!!!"}))
})

module.exports = router;