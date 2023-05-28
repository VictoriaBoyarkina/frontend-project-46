import yaml from 'js-yaml';

const getObject = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    case 'yaml':
      return yaml.load(data);
    default:
      return JSON.parse(data);
  }
};

export default getObject;
