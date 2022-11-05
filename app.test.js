import WeatherModel from "./models/forcast.js"
import * as WeatherController from "./controllers/WeatherController.js"

describe('Test of backend responses', function () {
    test("It should return status 200", async () =>{
        const response = await fetch("http:localhost:3001/forcast")
        console.log(response)
        expect(response).toBeDefined()
    })
    test("It should return specific object", async () =>{
        const data ={
            name : "Not Lviv",
            wind : "321",
            base : "214",
            coord : "321",
        }
        WeatherController.add(data)
        const addedForcast = WeatherModel.findOne({name : "Not Lviv"})
        expect(addedForcast).toBeDefined()
    })
});
