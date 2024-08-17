const mongoose = require("mongoose");

// Route Handler
const likeSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId, //represent some id conatins every like;
        ref: "Post" //refrence the Post model
    },
    user:{
        type: String, //which user like on the post 
        required: true 
        
    },
})


//export

module.exports = mongoose.model("Like", likeSchema);