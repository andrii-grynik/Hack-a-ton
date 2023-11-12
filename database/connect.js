import { MongoClient } from 'mongodb';

let client = null;

const getDriver = async () => {
  if (client && client.isConnected()) {
    return client;
  }

  client = new MongoClient(process.env.CONNECTION_STRING);

  await client.connect();
  return client;
};

export default getDriver;
