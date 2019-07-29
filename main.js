"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
console.log('=== n-fatorial ===');
const argv = require('yargs').demandOption('num').argv;
/*console.log(`Executando o script a partir do diretório ${process.cwd()}`);


process.on('exit', () => {
    console.log('O script está prestes a terminar');
});*/
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);