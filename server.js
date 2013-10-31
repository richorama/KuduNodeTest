require('http').createServer(function(req, res){
  res.end('hello world');
}).listen(process.env.port || 8080);
