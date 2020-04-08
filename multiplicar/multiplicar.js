// requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite =10) => {

    console.log('========================'.blue);
    console.log('======tabla de ${base}========'.blue);
    console.log('========================'.blue);

  for (i = 1; i <= limite; i++) {
    console.log(`${base * i}`);
  }
};

let mandarArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("No es un numero");
      return;
    }
    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    //const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}al-${limite}.txt`);
    });
  });
};

module.exports = {
  mandarArchivo,
  listarTabla,
};
