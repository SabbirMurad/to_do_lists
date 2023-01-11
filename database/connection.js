const mongoose = require('mongoose')

const connectString = ""
mongoose.set('strictQuery',false)

const connectDb =(url)=>{
  return mongoose.connect(url)
          .then(()=>console.log("connected to the database"))
          .catch((err)=>console.log(err))
}

module.exports = connectDb