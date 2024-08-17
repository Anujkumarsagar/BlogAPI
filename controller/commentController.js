const Comment = require("../model/commentModel")
const Post = require("../model/postModel")



exports.createComment = async(req,res) =>{
    try {

        // fetch from the body

        const {post, user, body} = req.body

        //create a object that stores actual value of the comment

        const comment = new Comment({
            post,user,body
        })

        // save the new comment into the database

        const savedComment = await comment.save()


        //find the post by id and update comment in this


        const updatePost = await Post.findByIdAndUpdate(post, {$push: {comment: savedComment._id}}, {new: true})
                                    .populate("comments")    
                                    .exec()


        res.json({
           post: updatePost,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            message: "Failed to create comment"
        })
    }
}


















































// const POST = require("../model/Blog");

// exports.CreateComment = async (id, req, res) => {
//     try {
//         // Destructure the comments from the request body
//         const { comments } = req.body;

//         // Validate that comments is not empty
        
//         // Add the comment to the post
//         const updatedPost = await POST.findByIdAndUpdate(
//             { _id: id },
//             { $push: { comments: [comments] } },
//             { new: true }
//         );

//         if (!comments) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Comments cannot be empty',
//                 data: null
//             });
//         }
//         // Respond with the updated post
//         res.status(200).json({
//             success: true,
//             message: 'Comment added successfully',
//             data: updatedPost
//         });

//     } catch (error) {
//         console.error("Error in CreateComment:", error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to add comment',
//             data: null
//         });
//     }
// };
