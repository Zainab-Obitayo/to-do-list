const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    dueDate:{
        type: Date,
        required: false
    },
    completedStatus:{
        type: String,
        required: false
    }
},{timestamps: true});

const list = mongoose.model('list', listSchema);
module.exports=list;