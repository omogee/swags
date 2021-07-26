const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
const mysql = require("mysql")
var cors = require('cors')
const bodyParser = require('body-parser')

const options = {
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'bb5d59758c4d0d',       
  password: 'a51d223a',  
  database: 'heroku_7d94203c8f7b16b'
 }  
 
const conn = mysql.createPool(options)
 
  console.log('mysql connected successfully')
 
app.use(cors()) 
app.use(bodyParser.urlencoded({extended: true}))  
app.use(bodyParser.json())   

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/login', (req, res) => {
    console.log("accessing route")
   const data = JSON.parse(req.body.data)
  const email = data.email
  const password = data.password
  conn.query(`Insert into userdetails (email, password) values (?,?)`,[email,password],(err, file)=>{
    if (err) throw err;
    console.log(file)
    res.send({data:`${email} and ${password} has been received successfully and is ready to rumble`})
  })
  });
  if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('agbasi/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'agbasi', 'build', 'index.html'));
    });
  }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});