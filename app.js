const express = require('express')
const router = require('./routes/tasks')
const connectDb = require('./database/connection')
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json())
app.use('/api/v1/tasks',router)


const start = async ()=>{
  try{
    await connectDb(process.env.MONGO_URI)
    app.listen(port,console.log(`App is listening to post ${port}...`))
  }
  catch(err){
    console.log(err)
  }
}

start()
