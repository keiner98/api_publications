import moongose from "mongoose";
import { mongoDB } from "./keys";

moongose.connect(mongoDB.URI).then((db)=>{
    console.log(`db is connect`);
}).catch((err)=>console.log(err));
