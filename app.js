import  express from 'express';
import  mongo from 'mongoose';
import WeatherModel from './models/forcast.js'
import cors from "cors"
import Singleton from "./models/Singleton.js";
import * as WeatherController from "./controllers/WeatherController.js"
import fetch from "node-fetch";

const db = Singleton.getInstance()


const app= express();

const apiKey = "934e101e3b6bf1363770a85bdc0e47d9"
const url = "https://api.openweathermap.org/data/2.5/weather?q=Lviv" + "&appid=" + apiKey



fetch(url)
    .then(response => response.json())
    .then(async data=> {
        if(await WeatherModel.findOne({name : "Lviv"})==undefined){
            console.log(data)
            await WeatherController.add(data)
        }
    })

app.use(express.json());
app.use(cors())



app.get('/',async (req,res) => {

    res.send("hello");

});





app.get('/forcast',WeatherController.getAll)


app.listen(3001, (err) => {
    if (err){
        return console.log(err);
    }

    console.log("Server ok");
})