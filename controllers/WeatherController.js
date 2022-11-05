import WeatherModel from "../models/forcast.js";


export const add =  async (data) =>{
    try{

        const doc = new WeatherModel({
            name: data.name,
            wind: data.wind.speed,
            base: data.base,
            coord: data.coord.lon,
        })

        const forcast = await doc.save()

    }
    catch (err){
        console.log(err)
    }
}

export const getAll = async (req,res) => {
    try {
        const weather = await WeatherModel.find();
        res.json(weather).status(200)
    }catch (err){
        console.log(err)
        res.status(500).json({
            message : "Server side error"
        })
    }
}
