import { getClient } from '../mongo-db-connection.js';

const dbName = 'porsche-db';

async function getAll(res) {
  try {
    const client = getClient();
    const db = client.db(dbName);
    let query = {};

    const collection = await db.collection('models');
    let results = await collection.find(query).limit(50).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error('Error fetching Porsche models:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getById(req, res) {
  try {
    const client = getClient();
    const db = client.db(dbName);
    const collection = await db.collection('models');

    const query = { _id: req.params.id };

    const result = await collection.findOne(query);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Porsche model not found' });
    }
  } catch (error) {
    console.error('Error fetching Porsche model by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function post(req, res) {
  try {
    const client = getClient();
    const db = client.db(dbName);

    const newPorsche = req.body;
    const collection = await db.collection('models');

    await collection.insertOne(newPorsche);
    res.send().status(201);
  } catch (error) {
    console.error('Error creating new Porsche model:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function put(req, res) {
  try {
    const client = getClient();
    const db = client.db(dbName);
    const collection = db.collection('models');

    const query = { _id: req.params.id };
    const foundItem = await collection.findOne(query);

    if (foundItem) {
      const updatedItem = req.body;
      await collection.replaceOne(query, updatedItem);
      res.status(200).json({ message: 'Porsche model updated successfully' });
    } else {
      res.status(404).json({ error: 'Porsche model not found' });
    }
  } catch (error) {
    console.error('Error updating Porsche model:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function patch(req, res) {
  try {
    const client = getClient();
    const db = client.db(dbName);
    const collection = db.collection('models');

    const query = { _id: req.params.id };
    const foundItem = await collection.findOne(query);

    if (foundItem) {
      const updatedItem = req.body;
      await collection.updateOne(query, { $set: updatedItem });
      res.status(200).json({ message: 'Porsche model updated successfully' });
    } else {
      res.status(404).json({ error: 'Porsche model not found' });
    }
  } catch (error) {
    console.error('Error updating Porsche model:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function remove(req, res) {
  try {
    const client = getClient();
    const db = client.db(dbName);
    const collection = db.collection('models');

    const query = { _id: req.params.id };
    const result = await collection.deleteOne(query);

    if (result.deletedCount > 0) {
      res.status(200).json({ message: 'Porsche model deleted successfully' });
    } else {
      res.status(404).json({ error: 'Porsche model not found' });
    }
  } catch (error) {
    console.error('Error deleting Porsche model:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const controller = {
  getAll,
  getById,
  post,
  put,
  patch,
  remove,
};

export default controller;
