// const MongoDB = require("./config/connectdb");
// MongoDB.connect();

const server = Bun.serve({
  port: 4000,

  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
