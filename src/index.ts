import express from "express";
import Publications from "./routes";
import cors from 'cors';
import "./db";

//settings
const app = express();
app.set("port", process.env.PORT || 3000);

//Middelwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use("/publications", Publications);

//Starting serve
app.listen(app.get("port"), () => {
  console.log(`Server run port ${app.get("port")}`);
});
