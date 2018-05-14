const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/app', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// })



app.post('/api/user', (req, res) => {
  if(req.body.user.email.split('@')[1] == "binghamton.edu"){
    console.log(req.body.email)
    res.json({"status":"success", "msg":"Login Succesfull", "token": req.body.tok})
  }
  else {
    console.log("Please sign in with @binghamton.edu id.")
    res.json({"status":"fail","msg":"Login Failed. Please sign in with @binghamton.edu id", "token": "null"})
  }



})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
