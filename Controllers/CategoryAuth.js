import Cat from '../Models/CategoryModel.js'

export const createCat = async(req, res)=>{
    const cat = new Cat = req.body
    try {
        const savedCat = await cat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

}