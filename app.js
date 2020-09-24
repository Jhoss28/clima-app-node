const { getLugarLtLn } = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    pais: {
        alias: 'p',
        desc: 'Ingrese el país',
        demand: true
    },
    ciudad: {
        alias: 'c',
        desc: 'Ingrese la ciudad',
        demand: true

    }

}).argv;


const getInTemperatura = async(region, localidad) => {

    try {
        const coord = await getLugarLtLn(region, localidad);
        const temp = await clima.getClima(coord.latt, coord.longt);
        return `La temperatura en ${localidad} es de ${clima.temperaturaCelcius(temp)} °C`
    } catch (e) {
        return `No de pudo determinar el clima de ${localidad}`
    }

}

getInTemperatura(argv.pais.toUpperCase(), argv.ciudad).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
})