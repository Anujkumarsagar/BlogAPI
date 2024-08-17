const mongoose = require("mongoose");


//Route Handler
const commetnmodel = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, //represent some id conatins every commenet;
        ref: "Post" //refrence the Post model
    },
    user:{
        type: String, //which user commneted on the post 
        required: true 
    },
    body: {
        type: String, //what commented
        required: true
    }


})

//Export
module.exports = mongoose.model("Comment", commetnmodel)