import { MongoClient, Db } from "mongodb";

// const uri = process.env.DB_URI;
const uri =
  "mongodb+srv://db_cris_user:zmJ6BxB7LfbaRDdf@cris-cluster.pqpr3.mongodb.net/cris-db";

let connected = false;
async function connect() {
  const client = new MongoClient(uri);

  if (connected) {
    return client;
  }

  try {
    // Connect the client to the server (optional starting in v4.7)
    const connection = await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    const { dbName, srvHost } = client.s.options;
    console.log(`Connected Successful to db ${srvHost}/${dbName}`);
    connected = true;
  } catch (error) {
    throw error;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

/**
 *
 * @returns {Db}
 */
const db = async () => {
  const client = await connect();

  return client.db();
};

export const MongoLib = {
  connect,
  db,
};
