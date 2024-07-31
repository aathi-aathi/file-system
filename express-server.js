import express from 'express'
import fs from 'fs'
const server = express()
server.use(express.json())
server.get('/write',(req,res)=>{
  fs.writeFileSync(`fs-files/${Date.now().toString()}.txt`,
  new Date().toISOString())
  res.send('file created successfully')
})
server.get('/read',(req,res)=>{
     const data = fs.readdirSync('fs-files','utf-8')
     res.send(data)
  })

const port = 8020;
server.listen(port,()=>{
    console.log('port is running at '+ port)
})
