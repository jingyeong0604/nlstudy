const moduleArr=[7,2,"Hello World", 11, "node", "Server", 8 ,1]
const day2=require('./day2')

function isChar(type){

    
    for(var i=0; i<moduleArr.length; i++){
    
        if(typeof(moduleArr[i])==String)
        day2.oppChar(moduleArr[i])
        else
        console.log(day2.isEven(moduleArr[i]))
        if(day2.isEven=='짝수입니다!')
        console.log(day2.square(moduleArr[i]))
    }
    
    }
    
    
    
