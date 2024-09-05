const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.1.0",
  info: {
    title: "V12 Footwear API",
    version: "1.0.0",
    description: `This is the API documentation for the V12 Footwear API.`
  },
  servers: [
    {
      url: "http://localhost:1337/api/",
      description: "Development server",
    },
    {
      url: "https://api-5lyh7.strapidemo.com/api",
      description: "Production server",
    }
  ],
  tags: [
    {
      "name": "Products",
      "description": "Everything about products"
    },
    {
      "name": "Categories",
      "description": "Everything about categories"
    },
    {
      "name": "Orders",
      "description": "Everything about orders"
    },
    {
      "name": "Users",
      "description": "Everything about users"
    },
    {
      "name" : "Posts",
      "description": "Everything about posts"
    }
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;


/**
 * 
 */