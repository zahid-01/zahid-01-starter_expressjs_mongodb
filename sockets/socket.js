const socket = require("socket.io");

let io;
const initWebSocket = (server) => {
  let connectedUsers = {};

  io = socket(server, { cors: { origin: "http://localhost:3000" } });

  io.on("connection", () => {});
};
