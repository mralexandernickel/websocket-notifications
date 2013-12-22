(function() {
  var client, io, redis;

  io = require("socket.io").listen(80);

  redis = require("redis");

  client = redis.createClient();

  client.subscribe("pubsub");

  io.sockets.on("connection", function(socket) {
    socket.emit("notification", {
      message: "you are connected to the websocket"
    });
    client.on("message", function(channel, message) {
      console.log(message);
      return socket.emit("notification", {
        message: message
      });
    });
    return socket.on("the_event_id", function(data) {
      console.log(data);
      return socket.emit("notification", {
        message: data.message
      });
    });
  });

}).call(this);
