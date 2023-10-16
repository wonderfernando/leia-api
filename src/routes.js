import {Router} from "express"
import {User} from "./app/models/User.js"
import {v4} from "uuid"
const routes = Router()

routes.get("/", function (req,res) {
    return res.json({message:"hellow word"})
})
routes.post("/user", async function (req,res) {
     try {
        const {name,password,email} = req.body
        const user = await User.create({id:v4(),name,password,email})
        console.log(user)
        return res.status(201).json(user)
     } catch (error) {
        res.status(500).json({erro:error})
     }
})

routes.get("/user", async function (req,res) {
    const users = await User.find();
    return res.status(200).json(users)   
})
export default routes