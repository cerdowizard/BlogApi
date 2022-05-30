import Post from "../Models/PostModel.js"
import User from "../Models/UserModel.js"

export const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.name === req.body.name) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id, {
                    $set: req.body
                },
                    { new: true }
                )
                res.status(200).json({ updatePost })
            } catch (err) {

            }
        }
        else {
            return res.status(401).json({ msg: `You can only update your post` })
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
export const getAllPost = async(req,res)=>{
    
}