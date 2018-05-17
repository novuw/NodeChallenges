var http = require('http');
var concatStream = require('concat-stream');
var totalStr;
http.get(process.argv[2], function callback(response){
    response.pipe(concatStream(function(data){
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
