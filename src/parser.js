const getObject = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    default:
      return JSON.parse(data);
  }
};

export default getObject;
