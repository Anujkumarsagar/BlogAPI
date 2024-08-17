const mongoose = require("mongoose")


const PostSchema = mongoose.Schema({

    username:{
        type: String,
        required: true,
        maxLength: 50
        
    },
    title :{
        type: String,
        required: true,
        maxLength: 50,
    },
    description :{
        type: String,
        required: true,
        maxLength: 50,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),

    },
    like:{
        type: Number,
        default: 0,
        

    },
    comments:{
        type: [String],
        // required: true,
        maxLength: 1000,
    }

})

module.exports = mongoose.model("Post", PostSchema)

