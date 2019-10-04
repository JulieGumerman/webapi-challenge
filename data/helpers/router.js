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

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    projects.remove(id)
        .then(data => res.json(data))
        .catch(err => {res.json({ message: "too amazing to be removed"})})
})

router.get("/:id/actions", (req, res) => {
    const { id } = req.params;
    projects.getProjectActions(id)
        .then(data => res.json(data))
        .catch(error => {res.json({ message: "These aren't the actions you are looking for."})})
})

router.post("/:id/actions", (req, res) => {
    const  id  = req.params.project_id;
    const newAction = req.body;
    actions.insert( newAction)
        .then(data => res.json(newAction))
        .catch(err => json.json({ message: "Sometimes you have those days. This is one of them!" }))
})

router.put("/:id/actions/:id", (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    actions.update(id, changes)
        .then(data => res.json(changes))
        .catch(err => res.json({ message: "better luck next time"}))
})

router.delete("/:id/actions/:id", (req, res) => {
    const { id } = req.params;
    actions.remove(id)
        .then(data => res.json(data))
        .catch(err => res.json({ message: "you're better off not deleting this one anyway!!!"}))
})

router

module.exports = router;