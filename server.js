const express = require('express')


const app = express()


function delay(duration){
    const startTime = Date.now()

    while(Date.now()-startTime <duration){

    }
}

app.get("/", (req,res)=>{
    res.send(`performance pid:${process.pid}`)
})

app.get("/timer", (req,res)=>{ 
    delay(4000)
    res.send(`Hey hey, I'm here now! what you were saying? pid:${process.pid}`)
})

app.listen(3000)

