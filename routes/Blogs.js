const express = require("express");
const { createComment } = require("../controller/commentcontroller");
const { createPost } = require("../controller/postController");
const { like, unlike } = require("../controller/likeController");

const router = express.Router();



router.post("/post/create", createPost)
router.post("/like/like", like)
router.post("/like/unlike", unlike)
router.post("/comment/create", createComment)

// const {PostCreate} = require("../controller/postController")
// const {Posts} = require("../controller/postController");
// const { CreateComment } = require("../controller/commentController");

// router.post("/post/create", PostCreate);
// router.get("/post/posts", Posts)
// router.post("/comments/create/:id",(req,res)=>{
//     const {id} = req.params;
//     CreateComment(id,req,res)
// })


module.exports = router;