//create Schema then document
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        minlength:5,
        maxlength:15,
        required:true
    },
    status:{
        type:String,
        default: "to-do"
    },
    tags:{
        type:String,
        maxlength:10,
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,ref:'User'
    } 
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;