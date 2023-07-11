import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'Connection_String';

let client;

export async function connectToMongoDB() {
  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export function closeMongoDBConnection() {
  if (client) {
    client.close();
    console.log('Disconnected from MongoDB');
  }
}

export function getClient() {
  return client;
}
