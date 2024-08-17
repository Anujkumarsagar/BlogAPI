const Like = require("../model/likeModel");
const Post = require("../model/postModel");

exports.like = async (req, res) => {
    try {
        // Destructure post and user from the request body
        const { post, user } = req.body;

        // Check if the user has already liked the post
        const checkLike = await Like.findOne({ post, user });

        if (checkLike) {
            return res.status(200).json({
                message: "Already liked",
                data: checkLike,
            });
        }

        // Create a new Like object
        const like = new Like({ post, user });

        // Save the new Like to the database
        const savedLike = await like.save();

        // Update the Post by pushing the new Like
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { like: savedLike._id } },
            { new: true }
        ).populate("like").exec();

        res.json({
            message: "Like successfully added",
            data: updatedPost,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true,
        });
    }
};

exports.unlike = async (req, res) => {
    try {
        // Destructure post and user from the request body
        const { post, user } = req.body;

        // Find and delete the Like object
        const findLike = await Like.findOneAndDelete({ post, user });

        if (!findLike) {
            return res.status(404).json({
                message: "Like not found",
                error: true,
            });
        }

        // Update the Post by pulling the Like
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { like: findLike._id } },
            { new: true }
        ).populate("like").exec();

        res.json({
            message: "Like successfully removed",
            data: updatedPost,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true,
        });
    }
};
