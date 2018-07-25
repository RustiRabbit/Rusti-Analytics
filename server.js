const express = require('express')
const app = express()
const io = require('socket.io')
const PORT = process.env.PORT || 5000

console.log("Starting Analytics Server")   

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")  
})

//Static Website
app.use('/static', express.static('public'))   

//Server
app.listen(PORT, () => { 
  console.log(`Listening on ${ PORT }`)
});