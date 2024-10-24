const { MongoClient } = require('mongodb');
require('dotenv').config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'newDataBase';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data = {
"firstName":
"Supun",
"lastName":
"Kalhara",
"age":
24,
"city":
"rakwana",
  };

  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());