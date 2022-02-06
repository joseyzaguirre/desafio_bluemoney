const axios = require('axios');
const fs = require('fs').promises;


if (process.argv.length < 6) {
    console.log('Se requeriere a lo menos 6 parámetros para ejecutar la aplicación');
    process.exit(1);
};


const nombre_archivo = process.argv[2] + '.' + process.argv[3];
const divisa = process.argv[4];
const pesos = process.argv[5];


//console.log(nombre_archivo)

async function convertirDivisa() {

    let resp = await axios.get('https://mindicador.cl/api');
    let infodolar = resp.data.dolar

    const conversion = (parseInt(pesos)/parseInt(infodolar.valor)).toFixed(2);
    const mensaje = `
A la fecha: ${infodolar.fecha} 
Fue realizada una cotización con los siguientes datos: 
Cantidad de pesos a convertir: ${pesos} 
Convertido a "${divisa}" da un total de: 
${conversion};
    `
    await fs.writeFile (nombre_archivo, mensaje, 'UTF-8');
}

convertirDivisa();