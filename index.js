const express = require('express')
const treatment = require('./treatment')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded())
app.use(function (req, res, next) {
    //res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();})
    .post('/csv',
    treatment.csv)
    .post('/form',
    treatment.sendinfos)
  .get('/csv',
    (req, res, next) => {
      res.sendFile('index.html', {root: __dirname }) 
    })
  .get('/assure',
    (req, res, next) => {
      res.sendFile('form.html', {root: __dirname }) 
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  .setTimeout(5000)
