const { Socket } = require("socket.io");

exports.socketAuth = (socket, next) => {
  const token = socket.handshake.query.token;
};
