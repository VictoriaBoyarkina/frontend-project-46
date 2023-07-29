const render = (element) => {
  switch (element.status) {
    case 'deleted':
      return `  - ${element.key}: ${element.value}`;
    case 'added':
      return `  + ${element.key}: ${element.value}`;
    case 'notChanged':
      return `    ${element.key}: ${element.value}`;
    case 'changed':
      return `  - ${element.key}: ${element.value[0]}\n  + ${element.key}: ${element.value[1]}`;
    case 'nested':
      return render(element.children);
    default:
      break;
  }
};

export default render;
