var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;



// var http = require("http");
// var myStuff = require("./request-handler");

// function start() {
// 	var port = 8080;
// 	var ip = "127.0.0.1";
// 	var server = http.createServer(myStuff.handleRequest);
// 	console.log("in start()");
// 	server.listen(port, ip);
// 	console.log("Listening on http://" + ip + ":" + port);
// };

// exports.start = start;




// response.write('Just what do you think you are doing, Dave? ');
//   response.end();


// require("http").createServer(function (request, response) {
//   response.write('Just what do you think you are doing, Dave? ');
//   response.end();
// }).listen(8080, "127.0.0.1");
