import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base '
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'fileName',
        type: 'string',
        default: 'table.txt',
        describe: 'File name'
    })
    .option('d', {
        alias: 'fileDestination',
        type: 'string',
        default: './outputs',
        describe: 'File destination'
    })
    .check((argv, options)=> {
        
        if ( argv.b < 1) throw new Error('Error: base must be greater number 0.');
        if ( argv.l < 1) throw new Error('Error: limit must be greater number 0.');
        
        return true;
    })
    .parseSync()