const express = require("express");
const fetch = require("node-fetch")

const router = express.Router()

router.get('/:locationName', (req, res) => {
    const locationName = req.params.locationName;
    console.log(locationName);

    const apiKey = "934e101e3b6bf1363770a85bdc0e47d9"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + locationName + "&appid=" + apiKey
    console.log(url);
    fetch(url)
        .then(response => { return response.json(); })
        .then(data => {
            console.log(data);
            url2=url
            fetch(url2)
                .then(r => {
                return r.json()
            })
                .then(d => {
                    res.setHeader("Access-Control-Allow-Origin","*")
                    res.send(d);
                })
                .catch(err=>{
                    console.log(err.message)
                })
        }).catch(err=>{console.log(err.message)})
});

module.exports = router