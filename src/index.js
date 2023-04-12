import fs  from 'fs';;
import process from 'process';
import path from 'path';

const gendiff = (filepath1, filepath2) => {

};

const getPath = (filepath) => path.resolve(process.cwd(), path);

const getExtension = (filepath) => path.extname(filepath).substring(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8')

export default gendiff;
