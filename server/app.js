import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./router/posts.js";

const app = express();
app.use(bodyParser.urlencoded({limit:"50mb" , extended:true}));
app.use(bodyParser.json({limit:"50mb", extended:true}));
app.use(cors());

app.use("/posts" , postRoutes)

const CONNECTION_URL = "mongodb+srv://tiger-bharat:bharat123@cluster0.jwbfv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL , {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT ,() => console.log(`server running on : ${PORT}`)))
    .catch((error) => console.log(error.message) );