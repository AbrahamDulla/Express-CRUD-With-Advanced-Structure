const http = require("http");
const app = require("./src/api/v1/index");
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerJsDocS = require("swagger-jsdoc");

const server = http.createServer(app);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./src/api/v1/routes/*.js"],
};

const swaggerDocs = swaggerJsDocS(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.listen(port, () => {
  console.log(`Express Crud is running on port http://localhost:${port}`);
});
