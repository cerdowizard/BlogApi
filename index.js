import dotenv from "dotenv"

import  express  from "express";

import cors from "cors"

import Auth from './Routes/AuthRoute.js'

import user from './Routes/UserRoute.js'

import './dataBaseConfig.js'

import post from './Routes/PostRoute.js'

import cookieParser from "cookie-parser";


dotenv.config()

const app = express()

app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.use('/api', Auth)

app.use('/api', user)

app.use('/api', post)
const port = 5010
app.get('/', (req, res) =>{
    res.json({msg:`Welcome to the blog`})
    console.log('working');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

