exports.handler = async function(event) {
  console.log(JSON.stringify(event));
  return {statusCode: 204};
};
