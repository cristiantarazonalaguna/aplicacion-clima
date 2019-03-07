
const axios = require('axios');

const getLugarLatLng = async(dir)=>{

        const encodeUrl = encodeURI(dir);

        const instance = axios.create({
            baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
            headers:{"X-RapidAPI-Key": "d690c671femshea1e5d9bcfbdfcdp104085jsnb2f5cf26b5ee"}
        });

        const resp = await instance.get()

        if(resp.data.Results.length === 0){
            throw new Error (`No hay resultado para ${direccion}`);
        }

        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion,
            lat,
            lng,
        }
}

module.exports ={
    getLugarLatLng
}
