

// import express, { json, urlencoded } from 'express';
// const app = express();
// const port = 3000;
// import path from "path";

// app.use(json());
// app.use(urlencoded({extended: false}));

// app.use('/issues', require('./routes/issues'));
// app.use('/users', require('./routes/users'));

// app.get('/', (req, res) => res.send("Home"));


// app.listen(port, () => console.log("Listening to port 3000...."));


// var jira = require("./request");
const fs = require("fs");
const path = require("path");

fs.readFile("./test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// jira.startCreation;