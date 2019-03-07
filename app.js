'use strict'
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

const getInfo = async(dir)=>{
    const coord = await lugar.getLugarLatLng(dir);
    const temp = await clima.getClima(coord.lat,coord.lng);
    return `El clima de ${coord.direccion}:
        Temperatura       : ${temp.temp}ºc
        Presión           : ${temp.pressure}
        Temperatura minima: ${temp.temp_min}
        Temperatura maxima: ${temp.temp_max} `
}

/*
console.log(argv.direccion);
lugar.getLugarLatLng(argv.direccion)
.then(resp=>{
    console.log(resp);
    console.log(resp.lat);
    console.log(resp.lng);
    clima.getClima(resp.lat,resp.lng)
    .then(cli=>{
        console.log(`El clima de ${resp.direccion}:
        Temperatura       : ${cli.temp}ºc
        Presión           : ${cli.pressure}
        Temperatura minima: ${cli.temp_min}
        Temperatura maxima: ${cli.temp_max} `)
    })
    .catch(err=>{
        console.log(`No se pudo determinar el clima de ${resp.direccion}`)
    });
});*/

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)
