io = require("socket.io").listen(80)
redis = require("redis")
client = redis.createClient()
client.subscribe "pubsub"

io.sockets.on "connection", (socket) ->
  socket.emit "notification",
    message: "you are connected to the websocket"

  client.on "message", (channel, message) ->
    console.log message
    socket.emit "notification",
      message: message


  socket.on "the_event_id", (data) ->
    console.log data
    socket.emit "notification",
      message: data.message
