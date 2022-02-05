const axios = require('axios');
const fs = require('fs');

/*
if (process.argv.length < 6) {
    console.log('Se requeriere a lo menos 6 parámetros para ejecutar la aplicación');
    process.exit(1);
};
*/

const nombre_archivo = process.argv[2] + '.' + process.argv[3];
const divisa = process.argv[4];
const pesos = process.argv[5];

/*
const conversion = parseInt(pesos) * parseInt(infodolar.valor);
const mensaje = `
    A la fecha: ${infodolar.fecha} 
    Fue realizada cotización con los siguientes datos: 
    Cantidad de pesos a convertir: ${pesos} 
    Convertido a "dólar" da un total de: 
    ${conversion};
`
*/

//console.log(nombre_archivo)

async function getData() {

    let resp = await axios.get('https://mindicador.cl/api');
    let infodolar = resp.data.dolar

    const conversion = parseInt(pesos) / parseInt(infodolar.valor);
    const mensaje = `
    A la fecha: ${infodolar.fecha} 
    Fue realizada cotización con los siguientes datos: 
    Cantidad de pesos a convertir: ${pesos} 
    Convertido a "${infodolar.nombre}" da un total de: 
    ${conversion};
`
    console.log(mensaje)
}

getData();