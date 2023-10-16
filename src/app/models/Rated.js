import mongoose from "mongoose";

export const Rated =  mongoose.model("Rate", {
    id: String,
    userid: String,
    postid:String
})