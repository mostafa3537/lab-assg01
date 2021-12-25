//create Schema then model then document

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName :{
        type: String,
        minlength:8,
        required:true
    },
    firstName :{
        type: String,
        minlength:3,
        maxlength:15,
        required:true
    },

    lastName :{
    type: String,
    minlength:3,
    maxlength:15,
    required:true
    },
    password :{
        type: String,
        required:true
        },
    dob: Date

})

//user is an instance of mongoose model
const user = mongoose.model('User',userSchema);

module.exports = user;