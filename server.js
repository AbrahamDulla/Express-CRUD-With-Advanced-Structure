const http = require("http");
const app = require("./src/api/v1/index");
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerJsDocS = require("swagger-jsdoc");

const server = http.createServer(app);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Abrish Swagger",
      description: "Swagger Test Description",
      version: "1.0",
    },
  },
  apis: ["server.js"],
};

const swaggerDocs = swaggerJsDocS(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.listen(port, () => {
  console.log(`Express Crud is running on port http://localhost:${port}`);
});
