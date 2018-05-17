var http = require('http');
var map = require('through2-map');
const server = http.createServer(function(request, response){
    if (request.method !== 'POST'){
        return response.end('Gib me Post \n')
    }
    request.pipe(map(function(request){
        return request.toString().toUpperCase()
    })).pipe(response);
});

server.listen(process.argv[2], function(){
    console.log('Bogie Inbound');
});
