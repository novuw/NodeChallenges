const net = require('net');
const date = new Date();
//TCP TIME SERVER
//"YYYY-MM-DD hh:mm"
//ex: "2013-07-06 17:42"
//on new connections, send string, then close
function zeroFill(i){
    return (i < 10 ? '0' : "") + i
}
function now(){
    return date.getFullYear() + "-" + zeroFill(date.getMonth() + 1) + "-" + zeroFill(date.getDate()) + " " + zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes())
}
const server = net.createServer(function listener(socket){
    console.log('server connected');
    socket.write(now() + '\n');
    socket.end(console.log('disconnected'));
});
server.listen(process.argv[2], function(){
    console.log('inbound');
});
