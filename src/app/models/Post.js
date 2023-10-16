import mongoose from "mongoose";

export const Post = mongoose.model("Post", {
    id: String,
    userid: String,
    title: String,
    date: date,
    path: String,
    description: String
})