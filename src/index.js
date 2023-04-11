import fs  from 'fs';;
import process from 'process';
import path from 'path';

const gendiff = (filepath1, filepath2) => {

};

const getPath = (filepath) => {
	const directory = process.cwd();
	const fullPath = path.resolve(directory, filepath);
	return fullPath;
};
  
const getExtension = (filepath) => {
	return path.extname(filepath);
}
  
const readFile = (filepath) => {
	const path = getPath(filepath);
	fs.readFile(path, 'utf8', function(err, data) {
		return data;
	});
}

export default gendiff;
