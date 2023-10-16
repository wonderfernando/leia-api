import express from "express"
import routes from "./routes.js"
 import mongoose from "mongoose"
const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect("mongodb+srv://fernandowonder:40C7fmcetPw95Gx6@cluster0.h5bf3zz.mongodb.net/books?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected !")
}).catch((()=>{
    console.log("fail connect")
}))

app.listen(3333, function () {
    console.log("is running on 3333")
}
) 

/* 
password mongodb 40C7fmcetPw95Gx6

mongodb+srv://fernandowonder:40C7fmcetPw95Gx6@cluster0.h5bf3zz.mongodb.net/?retryWrites=true&w=majority

*/