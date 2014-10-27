/**
 * Created by Beven on 26/10/2014.
 */

var querystring = require("querystring");
var formFactory = require("./formFactory");

function start(response, postData) { // this is ugly - variable not used in signature
    console.log("Request handler 'start' was called.");
    var body = formFactory.createUploadForm();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;