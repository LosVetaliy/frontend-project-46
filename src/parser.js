import yaml from 'js-yaml';

const parse = (data, fileExtension) => {
  switch (fileExtension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`unknown file extension ${fileExtension}`);
  }
};
export default parse;
