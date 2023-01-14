const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
  // res.send('hello')
  res.status(200).sendFile(path.resolve(__dirname,'./public/index.html'))
})

module.exports = router