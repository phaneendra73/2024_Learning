import { Client } from 'pg';

export async function getClient() {
  const client = new Client(
    'postgresql://test_owner:rhjbHxUs71RQ@ep-icy-thunder-a5pqaef7.us-east-2.aws.neon.tech/test?sslmode=require'
  );
  await client.connect();
  return client;
}
