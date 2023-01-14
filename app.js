const express = require('express')
const taskRouter = require('./routes/tasks')
const pageRouter = require('./routes/pages')
const connectDb = require('./database/connection')
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',taskRouter)
app.use('/',pageRouter)


const start = async ()=>{
  try{
    await connectDb(process.env.MONGO_URI)
    app.listen(port,console.log(`App is live on post ${port}...`))
  }
  catch(err){
    console.log(err)
  }
}

start()
