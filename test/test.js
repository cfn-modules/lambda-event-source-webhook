const test = require('ava');
const cfntest = require('@cfn-modules/test');
const axios = require('axios');

test.serial('defaults', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/defaults.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    const res = await axios.post(outputs.Url);
    t.is(res.status, 204);
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
