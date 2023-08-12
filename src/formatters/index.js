import stylish from './stylish.js';
import plain from './plain.js';

export default (diff, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    default:
      throw new Error(`output format ${format} not found`);
  }
};
