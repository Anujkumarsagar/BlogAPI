const Post = require("../model/postModel")

//fetch the data from the req body


exports.createPost = async (req, res) => {
    try {
        
        //fetch

        const {title, body} = req.body;

        //object

        const post = new Post({
            title,body
        })


        const savedPost = post.save()

        res.json({
            message: "Created Post successfully" 
        })
    } catch (error) {
        res.status(500).json({
            error: "Error while creating post"
        })
        
    }
}












































// const POST = require("../model/Blog")



// exports.PostCreate = async(req, res) => {
// try {
    
//     const {title, description, like,username } = req.body;

//     const response = await POST.create({
//         title,
//         username,
//         description,
//         like
//     })

//     res.status(200).json({
//         status: true,
//         data:response,
//         message: "Blog post created successfully"
//     })


// } catch (error) {
//     console.error("the error is in POSt",error)
//     res.status(500).json({
//         status: false,
//         data:null,
//         message: error.message
//     })

// }

// }

// exports.Posts = async(req, res) =>{
//     try {
        
//    const response = await POST.find();

//     res.status(200).json({
//         status: true,
//         data:response,
//         message: "Blog post created successfully"
//     })

//     } catch (error) {
//         console.error("the error is in Posts",error)
//         res.status(500).json({
//             status: false,
//             data:null,
//             message: error.message
//         })
//     }
// }

