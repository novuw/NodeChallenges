var http = require('http');
var urls = require('url');
//json data hour, minute, second
//second endpoint for path /api/unixtime same string but returns milliseconds since Date().getmilliseconds
const server = http.createServer(function(request, response){
    console.log(request.url);
    var adr = urls.parse(request.url, true);
    var tim = adr.query;
    var date = new Date(tim.iso);
    if (request.method == 'GET'){
    response.writeHead(200, {'Content-Type': 'application/json'});
        if (adr.pathname == '/api/parsetime'){
            return response.end(JSON.stringify({'hour': date.getHours(),'minute': date.getMinutes(),'second': date.getSeconds()}));
        } else if (adr.pathname == '/api/unixtime'){
            return response.end(JSON.stringify({'unixtime': date.getTime(date)}));
        } else {

    }

    } else {
        return response.end('Fix your shit; \n');
    }
});
server.listen(process.argv[2], function(){
   console.log('Incoming Connection BOIIIIIII');
});
