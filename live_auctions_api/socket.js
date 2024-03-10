const { Server } = require('socket.io');
let io;
let adIo;

exports.init = (server) => {
  io = new Server(server, {
    cors: {
      // origin: process.env.CLIENT_BASE_URL,
      // origin: "http://localhost:5000/socket.io/?EIO=4&transport=polling&t=OtrY4S4",
      // origin: "http://localhost:3000",
      origin: "*",
      methods: ['*'],
      allowedHeaders: ['*'],
    },
  });
  return io;
};

exports.initAdIo = (server, path = '/socket/adpage') => {
  adIo = new Server(server, {
    cors: {
      // origin: process.env.CLIENT_BASE_URL,
      // origin: "http://localhost:5000/socket.io/?EIO=4&transport=polling&t=OtrY4S4",
      // origin: "http://localhost:3000",
      origin: "*",
      methods: ['*'],
      allowedHeaders: ['*'],
    },
    path: path,
  });
  return adIo;
};

exports.getIo = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};

exports.getAdIo = () => {
  if (!adIo) {
    throw new Error('Socket.io not initialized');
  }
  return adIo;
};
