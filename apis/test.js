const http = require('http');
const url = require('url');
const fs = require('fs');
const util = require('util');

const serve =  http.createServer((req,res)=>{
    
    // console.log(req)

    // fs.writeFile('../log/req.txt',util.inspect(req),(err)=>{
    //     console.log(err)
    // })

    // fs.writeFile('../log/res.txt',util.inspect(res),(err)=>{
    //     console.log(err)
    // })

    let requrl = url.parse(req.url,true);
    if(requrl.pathname ==='/test'){
        let resobj = {
            name:'小R',
            type:'rabbit',
            age:'??!!'
        }
        res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
        res.end(JSON.stringify(resobj));
    }else{
        req.pipe(res);
    }
})

serve.listen(3334, 't00005162-7.corp.vipshop.com');

serve.on('close',function(){
    console.log('serve close');
});
console.log('serve run');