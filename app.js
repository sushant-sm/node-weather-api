const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
const { stat } = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname+ "/index.html")
});

app.post('/', function(req, res) {
    let city = req.body.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +",india&units=metric&appid={{Enter ur unique app id here}}";
    // https.get(url, function(response){
    //     console.log(res.statusCode);
    //     const weatherData = JSON.parse(data)
    //     const temp = weatherData.main.temp;
    //     console.log("temperature in Pune is "+ temp+ " degree celcius.")
        // res.on("data", function(data){
        //     const temp = weatherData.main.temp;
        //     console.log("temperature in Pune is "+ temp+ " degree celcius.")
        // })
    // })
})


app.listen(3000, function() {
    console.log("Listining on 3000");
})


