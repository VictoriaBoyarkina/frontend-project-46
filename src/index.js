import fs  from 'fs';
import process from 'process';
import path from 'path';
import getObject from './parser.js'


const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getExtension = (filepath) => path.extname(filepath).substring(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const gendiff = (filepath1, filepath2, format = 'stylish') => {
	const fullPath1 = getPath(filepath1);
	const fullPath2 = getPath(filepath2);
	const extension1 = getExtension(filepath1);
	const extension2 = getExtension(filepath2);
	const file1 = readFile(fullPath1);
	const file2 = readFile(fullPath2);
	const object1 = getObject(file1, extension1);
	const object2 = getObject(file2, extension2);
};

gendiff('./fixtures/file1.json', './fixtures/file1.json');

export default gendiff;
