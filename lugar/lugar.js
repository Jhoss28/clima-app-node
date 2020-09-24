const axios = require('axios');

const getLugarLtLn = async(region, localidad) => {
    const endPoint = encodeURI(`https://geocode.xyz/?region=${region}&locate=${localidad}&json=1`);
    let data = [];

    try {

        const resultado = await axios.get(endPoint);
        data = await resultado.data.alt.loc;
        if (data && data.city === localidad && data.prov === region) {
            return data;
        } else {
            return `No hay datos para la región ${region} y el país ${localidad}`;
        }

    } catch (err) {
        return 'ERROR!!!'
    }

}
module.exports = {
    getLugarLtLn
}