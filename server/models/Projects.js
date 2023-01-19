
const mongoose = require('mongoose');



const ProjectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    deployed: {
        type: String,
        required: true,
    },
})



const ProjectModel = mongoose.model('project', ProjectsSchema);
module.exports = ProjectModel;
