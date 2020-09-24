const axios = require('axios');

const getClima = async(lat, lng) => {

    const apiKey = 'a0a2fc6d28eec94d305dba9b3895296d';
    const endPoint = encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`);
    const resultado = await axios.get(endPoint);
    return resultado.data.main.temp;
}

const temperaturaCelcius = (temperatura) => {
    const tmpKelvin = 273.15;
    return Math.round(temperatura - tmpKelvin);
}

module.exports = {
    getClima,
    temperaturaCelcius
}