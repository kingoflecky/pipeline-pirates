const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });
const stepFunctions = new AWS.StepFunctions();

export const handler = async (event) => {
  // TODO implement
  console.log(event);

  const executionRequest = {
    stateMachineArn: 'arn:aws:states:eu-west-1:340571445489:stateMachine:MyStateMachine-uhcftzq8z', // Replace with your actual state machine ARN
    name: 'MyStateMachine-1', // Replace with a unique execution name
  };

  stepFunctions.startExecution(executionRequest, (err, data) => {
    if (err) {
      console.error(`Error starting step function execution: ${err.message}`);
    } else {
      console.log(`Step function execution started successfully: ${data.executionArn}`);
    }
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

