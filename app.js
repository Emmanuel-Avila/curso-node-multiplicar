const argv = require('./config/yargs').argv;
const colors = require('colors');

const { mandarArchivo } = require("./multiplicar/multiplicar");
const { listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    mandarArchivo(argv.base, argv.limite)
      .then((archivo) => {
        console.log(`Archivo creado: ${archivo.green}`);
      })
      .catch((err) => {
        console.log(err);
      });
    break;

  default:
    console.log("No existe ese comando");
}

// console.log(argv.base);
// console.log(argv.limite);

// let base = parametro.split('=')[1];

// console.log(base);
