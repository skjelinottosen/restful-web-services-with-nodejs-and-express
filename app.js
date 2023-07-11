import express from 'express';
import porscheRouter from './routes/porsche-router.js';
const app = express();

import {
  connectToMongoDB,
  closeMongoDBConnection,
} from './mongo-db-connection.js';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', porscheRouter());

async function startServer() {
  try {
    await connectToMongoDB();
    const server = app.listen(port, () => {
      console.log('Server is running on port ' + port);
    });

    // Handle application shutdown
    process.on('SIGINT', async () => {
      try {
        await closeMongoDBConnection();
        server.close(() => {
          console.log('Server closed');
          process.exit(0);
        });
      } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

startServer();
