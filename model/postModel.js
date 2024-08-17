const mongoose = require("mongoose");

//Route Handler
const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    body:{
        type:String, 
        required: true,
    },
    like:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'  // references User collection
    }],
    comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'  // references User collection
    }]
})

//exports


module.exports = mongoose.model("Post", postSchema)