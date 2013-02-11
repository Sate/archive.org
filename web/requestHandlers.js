function start() {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;







// var url = require("url");
// var router = require("./router");



// function handleRequest (req, res) {
//   var pathname = url.parse(req.url).pathname;
//   console.log("Request for " + pathname + " received.");

// 	router.route(pathname);	

//   console.log("request received - in handleRequest");
//   res.end('<input></input>');
// };

// exports.handleRequest = handleRequest;

