const express = require("express");
const router = express.Router();
var users = require('../data/Users').default;

router.get("/", (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    if(!req.body.username)
    {
        return res.status(400).send("Username is a required paramater!");
    }

    var newUser = {
        id: 3,
        username: req.body.username
    }
    users.push(newUser);
    res.json(users);
})

router.put('/:id', (req, res) => {
    const newData = req.body;
    const id = req.params.id;

    const exist = users.some(user => user.id === parseInt(id));

    if(!exist)
    {
        res.status(400).send(`No user found with the id ${id}`);
    }

    var chosen = users.find(user => user.id == id);
    chosen.username = newData.username;
    
    res.json(chosen);
})

module.exports = router;