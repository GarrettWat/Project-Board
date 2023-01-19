const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const ProjectsModel = require('./models/Projects');


const cors = require('cors');
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://user123:Garrett123@merncluster.v82p08y.mongodb.net/trackers?retryWrites=true&w=majority');

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})  

app.post("/createProjects", async (req, res) => {
    const projects = req.body
    const newProject = new ProjectsModel(projects);
    await newProject.save();

    res.json(projects);
})
app.get("/getProjects", (req, res) => {
    ProjectsModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});
app.listen(3001, () => {
    console.log('Server is running on port 3001');
})