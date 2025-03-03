import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import bodyParser from "body-parser"
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.listen(5000, () => console.log("Server connected"));
app.get('/test', (req,res) => {
    res.render('home');
    
})

