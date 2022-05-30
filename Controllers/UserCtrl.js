import User from "../Models/UserModel.js";

export const updateUser = async (req,res)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
export const deleteUser = async (req,res)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
export const getUser = async (req,res)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
export const getUsers = async (req,res)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}