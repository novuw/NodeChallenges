var http = require('http');
var concatStream = require('concat-stream');
var count = 0;
var urls = [];
var responses = [];
for (var i = 2; i < process.argv.length; i++){
    urls.push(process.argv[i]);
}

function print(index){
    http.get(urls[index], function(response){
       response.pipe(concatStream(function(data){
           responses[index] = data.toString();
           count++;
           if (count == 3){
               responses.forEach(function(element){
                   console.log(element);
               });
           }
       }));
    });
}
for (var e = 0; e < urls.length; e++){
    print(e);
}
