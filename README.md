# Product API Documentation

This document provides an overview of the Product API, a simple Node.js API for managing products using MongoDB.

## Features
- Retrieve all products from the database.
- Uses Express.js for handling API requests.
- MongoDB as the database backend.

## Installation Guide

### Prerequisites
Ensure you have Node.js and MongoDB installed on your system.

### Steps

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. Install project dependencies:
   ```sh
   npm install
   ```

3. Configure the environment variables by creating a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Reference

### Get All Products
- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Response:** JSON array of all products

## Project Directory Structure
```
/project-root
├── models/
│   ├── product.models.js
├── routes/
│   ├── product.routes.js
├── controllers/
│   ├── product.controller.js
├── server.js
├── package.json
├── README.md
```

## Contribution Guidelines
We welcome contributions! Feel free to submit a pull request if you find any i
