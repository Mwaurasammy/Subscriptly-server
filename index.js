const jsonServer = require('json-server');
const cors = require('cors');  // Import the CORS package
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(cors()); // Enable CORS for all routes
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running on port', port);
});
