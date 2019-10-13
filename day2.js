const moduleArr=[7,2,"Hello World", 11, "node", "Server", 8 ,1]
module.exports={
    isEven:(a)=>{
        if(a%2==1)
        {
            console.log('홀수입니다!')
        }
        else
        {
            console.log('짝수입니다!')
        }
    },

    square:(n)=>{
        console.log( Math.pow(2,n))
    },
    oppChar:(c)=>{
        console.log(moduleArr.reverse())

    }
}




// const http=require('http');

// const server=http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type' : 'text/plain'})
//     res.write('Hello nodejs!');
//     res.end();

// }).listen(3000, ()=>{
//     console.log('server on!');
// })