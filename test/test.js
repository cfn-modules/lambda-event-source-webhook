const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('defaults', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/defaults.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    const res = await cfntest.probeHttpPost(outputs.Url);
    t.is(res.status, 204);
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
