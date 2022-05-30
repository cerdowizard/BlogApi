import User from "../Models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
    try {
        const pwdFilter =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        const phoneVlidator = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        const { name, email, mobile, password, cn_password } = req.body
        
        const username = await User.findOne({ name })

        if (username) return res.status(400).json({ msg: "Username belong to another user already!!!...." })

        const userEmail = await User.findOne({ email })

        if (userEmail) return res.status(400).json({ msg: "Email belong to another user already!!!...." })

        if (!email) return res.status(400).json({ msg: "Email feild can not be empty!!!...." })

        if(!emailValidator.test(email))return res.status(400).json({ msg: "Please enter a valid email!!!...." })

        if (password.length < 5) return res.status(400).json({ msg: "Password must be atleast 6 characters long!!!...." })
        
        if(!pwdFilter.test(password)) return res.status(400).json({ msg: "password should contain atleast one number and one special character!!!...." })

        if (password != cn_password) return res.status(400).json({ msg: "Password and Confirm password must be !!!...." })

        if (mobile.length < 11) {
            return res.status(400).json({ msg: "Phone cannot be less than 11 characters!!!...." })
        }

        if(!phoneVlidator.test(mobile)) return res.status(400).json({msg: `Please enter a valid phone number!!!...`})

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new User({
            name, email, mobile, password: passwordHash
        })

        await newUser.save()

        return res.send({
            msg: `Account created successsfully`,
            newUser
        }).status(200)
    }

    catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

//login
export const login = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: `Email field can not be empty` })
        }
        if (!user) {
            return res.status(400).json({ msg: `User not found` })
        }

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return res.status(400).json({ msg: `Incorrect password ` })

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
        );

        const { password, isAdmin, ...otherDetails } = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

}

//Forgot password
export const forgotPassword = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: message })
    }
}

//logout
export const logout = async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: message })
    }
}