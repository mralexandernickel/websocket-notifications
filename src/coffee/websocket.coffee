$ ->
  socket = io.connect "http://localhost"
  
  socket.on "notification", (data) ->
    console.log data
    $("#notification-container").append $("<div class=\"alert alert-info\">#{data.message}</div>")
  
  socket.on "debug", (data) -> console.debug data
  
  $("#sender").click (e) ->
    e.preventDefault()
    socket.emit "the_event_id",
      message: "any value you wish"
    
