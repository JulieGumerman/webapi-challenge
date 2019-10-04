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

router.post("/", (req, res) => {
    const newProject = req.body;
    projects.insert(newProject)
        .then(data => res.json(newProject))
        .catch(err => res.json({ message: "Oh dear...it didn't work"}))
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    projects.update( id, changes )
        .then(data => {res.json(changes)})
        .catch(err => res.json({ message: "ruhh-roohhh"}))
})

module.exports = router;