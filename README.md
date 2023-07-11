# RESTful API for Porsche Car Models

This repository contains a RESTful API built with Node.js and Express that allows users to perform CRUD operations on a MongoDB database for Porsche car models. The API provides endpoints for creating, reading, updating, and deleting car models.

## Features

- Create a new car model
- Retrieve all car models
- Retrieve a specific car model by ID
- Update an existing car model
- Delete a car model

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Setup

1. Clone the repository:

```
git clone https://github.com/your-username/porsche-car-models-api.git
```

2. Install the dependencies:

```
cd porsche-car-models-api
npm install
```

3. Configure the MongoDB connection:
   - Create a `.env` file in the root directory.
   - Add the following line to the `.env` file, replacing `<MONGODB_URL>` with your MongoDB connection URL:

```
MONGODB_URL=<MONGODB_URL>
```

4. Start the application:

```
npm start
```

## API Endpoints

The following endpoints are available:

- `GET /models`: Retrieves all car models
- `GET /models/:id`: Retrieves a specific car model by ID
- `POST /models`: Creates a new car model
- `PUT /models/:id`: Updates an existing car model
- `DELETE /models/:id`: Deletes a car model

### Request Examples

- `GET /models`

```bash
curl -X GET http://localhost:3000/models
```

- `GET /models/:id`

```bash
curl -X GET http://localhost:3000/models/1
```

- `POST /models`

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "911",
  "year": 2022,
  "price": 150000
}' http://localhost:3000/models
```

- `PUT /models/:id`

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "name": "Cayenne",
  "year": 2023,
  "price": 100000
}' http://localhost:3000/models/1
```

- `DELETE /models/:id`

```bash
curl -X DELETE http://localhost:3000/models/1
```

## Setting up Database in MongoDB Atlas

This section provides instructions for setting up a database in MongoDB Atlas, creating a database named "prosche-db," and importing a JSON file named "porsche-models.json" into a collection called "models." Follow the steps below:

### Prerequisites

Before you begin, make sure you have the following:

1. MongoDB Atlas account: Sign up for a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) if you don't already have one.
2. MongoDB Atlas cluster: Create a new cluster or use an existing one in your MongoDB Atlas account.
3. MongoDB Atlas connection string: Obtain the connection string for your cluster. You will need this to connect to your database.

### Step 1: Create a Database in MongoDB Atlas

1. Log in to your MongoDB Atlas account.
2. Go to your cluster's dashboard.
3. Click on the "Collections" tab in the left sidebar.
4. Click the "Create Database" button.
5. Enter "prosche-db" as the database name.
6. Select the desired configuration options for your database, such as the storage size, backup options, etc.
7. Click the "Create" button to create the database.

### Step 2: Import JSON Data into the "models" Collection

1. Make sure you have the "porsche-models.json" file available on your local machine. If you don't have the file, download or obtain it from the appropriate source.
2. Open MongoDB Atlas.
3. Go to your cluster's dashboard.
4. Click on the "Collections" tab in the left sidebar.
5. In the "Database" dropdown menu, select "prosche-db" (the database you created in Step 1).
6. Click the "Add My Own Data" button.
7. Select the "Import File" option.
8. Click the "Choose File" button and browse to the location where you have the "porsche-models.json" file saved.
9. Once selected, click the "Next" button.
10. In the "Collection Name" field, enter "models."
11. Leave the other options as default or adjust them according to your requirements.
12. Click the "Import" button to start the import process.
13. Wait for the import to complete. Depending on the size of the JSON file and the performance of your cluster, this process may take a few minutes.
14. Once the import is finished, you should see a success message.

Congratulations! You have successfully set up a database named "prosche-db" in MongoDB Atlas and imported the JSON data from "porsche-models.json" into the "models" collection. You can now start working with your data in MongoDB Atlas.

## Error Handling

The API handles errors gracefully and returns appropriate HTTP status codes and error messages in the response.

## Conclusion

This RESTful API provides a convenient way to manage Porsche car models by allowing users to perform CRUD operations on a MongoDB database. It can be easily customized and extended to fit specific requirements. Feel free to contribute to the project by submitting pull requests or reporting issues.
