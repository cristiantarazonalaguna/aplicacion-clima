'use strict'

const axios = require('axios');

const getClima = async(lat,lng)=>{
    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=af27b2eae6d9be85b90cd3e507e5167d&units=metric`)
    return resp.data.main;
}

module.exports ={
    getClima
}

