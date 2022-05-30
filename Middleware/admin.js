import User from "../Models/UserModel.js";

export const authAdmin =async (req, res, next) =>{
    try {
        const   user =  await User.findOne({
            _id: req.user.id
        })
        if(user.isAdmin === false)
        return res.status(400).json({msg:'Admin reasouces access denied'})
        next()
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
}

