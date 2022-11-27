const http = require("http");
const app = require("./src/api/v1/index");
const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Express Crud is running on port http://localhost:${port}`);
});
