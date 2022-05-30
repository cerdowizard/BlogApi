import jwt from "jsonwebtoken";
export const auth = (req, res, next)   =>{
    try {
      const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: 'Invalid token authentication'})

        jwt.verify(token, process.env.JWT, (err, user) =>{
            if(err) return res.status(400).json({msg: 'Invalid authentication'})
            req.user = user
            next()
        })
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

