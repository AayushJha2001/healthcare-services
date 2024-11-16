This project is a simple API built with Node.js, Express, and MongoDB to manage healthcare services. It includes endpoints for adding, retrieving, updating, and deleting services.

**Prerequisites**

Node.js: Ensure Node.js is installed on your system.
MongoDB: Install MongoDB and ensure it is running locally.
Git: Install Git if not already installed.

**Steps to Set Up and Run**

1. Clone the Repository
git clone https://github.com/AayushJha2001/healthcare-services.git
cd healthcare-api

2. Install Dependencies
npm install express mongoose body-parser

3. Configure MongoDB
Ensure MongoDB is running locally (default port: 27017).
The application connects to a database named Healthcare by default. You can change this in the index.js file if needed.

4. Start the Application
npx nodemon index.js

5. Test the API
Use Postman or curl to interact with the following endpoints:

**Add a Service:**

POST /api/services
Example Body:
{
  "name": "X-ray",
  "description": "X-ray checkup",
  "price": 1000
}

**Get All Services:**

GET /api/services

**Update a Service:**

PUT /api/services/{id}
Example Body:
{
  "name": "chemotherapy",
  "description": "chemotherapy sessions",
  "price": 150
}

**Delete a Service:**

DELETE /api/services/{id}


**Pulling and Running the Project**

To clone and run the project on any machine:

Clone the repository:

git clone https://github.com/AayushJha2001/healthcare-services.git

cd healthcare-api

Install dependencies:

npm install express mongoose body-parser
Start MongoDB locally.

Run the application:

npx nodemon index.js
