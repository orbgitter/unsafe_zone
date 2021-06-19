const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { generateAlarm } = require('./controller/alarmGenerator.ctl')
const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

// const io = socketIo(server);

app.get('/alarm', generateAlarm);

io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });


  server.listen(port, () => console.log(`Listening on port ${port}`));
