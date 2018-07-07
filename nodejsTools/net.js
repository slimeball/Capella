const net = require('net');
const server = net.createServer(function(socket){
    console.log('server connected');
    socket.on('end',function(){
        console.log('server disconnected')
    })
    socket.on('data', function(){
        socket.end('hello\r\n');
    });
    // socket.pipe(socket);
}).listen(5000)
console.log('runed 5000')