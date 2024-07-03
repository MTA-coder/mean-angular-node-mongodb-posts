const response = (data, message = 'OK') => {
  return {
    message: message,
    data: data
  };
}

module.exports = response;
