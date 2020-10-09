const core = require('@actions/core');
const { GoogleAuth } = require('google-auth-library');

async function main() {
  const saKey = core.getInput('sa_key', { required: true });
  const targetAudience = core.getInput('target_audience', { required: true });

  const buffer = Buffer.from(saKey, 'base64');
  const credentials = JSON.parse(buffer.toString('utf8'));
  const client = await (new GoogleAuth({ credentials })).getIdTokenClient(targetAudience);
  const { Authorization } = await client.getRequestHeaders();
  const token = Authorization.replace(/Bearer /g, '');
  core.setSecret(token);
  core.setOutput('token', token);
}

main().catch((e) => core.setFailed(e));
