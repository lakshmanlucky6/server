const http=require('http')
const username='127.0.0.1'
const port = 3000;
var cnt=1;
const requestListener = function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text');
    if(cnt % 2 == 1){
        console.log("connected clients : ",(cnt+1)/2);
    }
    cnt+=1;
    if(req.method === 'GET'){
        res.end("Client request with GET method");
    }else{
        res.end("Client request with POST method");
    }
};
const server = http.createServer(requestListener);
server.listen(port,username);
