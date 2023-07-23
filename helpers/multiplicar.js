const fs = require("fs");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla base ${base} creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
