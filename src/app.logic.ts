import * as fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: show } = yarg;
let output = `=================== \n TABLA DEL ${base} \n===================\n`;

for (let i = 1; i <= limit; i++) {
    output += `${base} x ${i} = ${base * i}\n`;
}

if(show) console.log(output)

const outputPath = 'outputs'
fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${ outputPath }/tabla-de-multiplicar.txt`, output);
console.log(`\nLa tabla ha sido guardada en el archivo "tabla-de-multiplicar.txt"`);