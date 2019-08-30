const AWS = require('aws-sdk');
const response = require('cfn-response');
const apigateway = new AWS.APIGateway({apiVersion: '2015-07-09'});

exports.handler = (event, context, cb) => {
  console.log(JSON.stringify(event));
  const error = (err) => {
    console.log(JSON.stringify(err));
    response.send(event, context, response.FAILED);
  };
  if (event.RequestType === 'Delete') {
    apigateway.deleteDeployment({
      restApiId: event.ResourceProperties.RestApiId,
      deploymentId: event.PhysicalResourceId
    }, (err) => {
      if (err) {
        error(err);
      } else {
        response.send(event, context, response.SUCCESS);
      }
    });
  } else if (event.RequestType === 'Create' || event.RequestType === 'Update') {
    apigateway.createDeployment({
      restApiId: event.ResourceProperties.RestApiId,
      description: `input ${event.ResourceProperties.LambdaModule} ${event.ResourceProperties.HttpMethod}`
    }, (err, data) => {
      if (err) {
        error(err);
      } else {
        response.send(event, context, response.SUCCESS, {}, data.id);
      }
    });
  } else {
    error(new Error(`unsupported request type: ${event.RequestType}`));
  }
};
