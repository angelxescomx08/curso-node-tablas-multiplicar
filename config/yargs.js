const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      default: false,
      type: "boolean",
      describe: "Muestra en la consola las multiplicaciones",
    },
    h: {
      alias: "hasta",
      default: 10,
      type: "number",
      describe: "Para especificar hasta que número llegan las multiplicaciones",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    if (isNaN(argv.h)) {
      throw "La opción hasta debe ser un número";
    }
    if (typeof argv.l !== "boolean") {
      throw "Listar debe ser un booleano";
    }
    return true;
  }).argv;

module.exports = argv;
