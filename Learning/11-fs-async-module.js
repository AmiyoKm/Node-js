const {readFile , writeFile} = require('fs')

readFile('Learning/content/first.txt','utf8',(err,result)=> {
    if(err) return null

    const first = result

    readFile('Learning/content/second.txt','utf8',(err,result)=> {
        if(err) return null

        const second = result
        writeFile('Learning/content/result-async.txt', `Here is the result : ${first} , ${second}`,(err,result)=>{
            if (err) {
                return null
            }
            console.log(result);
            
        })
    })
    
})