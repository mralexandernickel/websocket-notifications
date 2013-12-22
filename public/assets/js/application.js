(function() {
  $(function() {
    if (typeof console !== "undefined" && console !== null) {
      return console.log("up and running");
    }
  });

}).call(this);
(function() {
  $(function() {
    var socket;
    socket = io.connect("http://localhost");
    socket.on("notification", function(data) {
      console.log(data);
      return $("#notification-container").append($("<div class=\"alert alert-info\">" + data.message + "</div>"));
    });
    socket.on("debug", function(data) {
      return console.debug(data);
    });
    return $("#sender").click(function(e) {
      e.preventDefault();
      return socket.emit("the_event_id", {
        message: "any value you wish"
      });
    });
  });

}).call(this);
