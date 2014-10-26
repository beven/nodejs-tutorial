/**
 * Created by Beven on 26/10/2014.
 */

function route(handle, pathName, response, postData) {
    console.log("About to route a request for " + pathName);
    if(typeof handle[pathName] == 'function') {
        return handle[pathName](response, postData);
    } else {
        console.log("No request handler found for " + pathName);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;