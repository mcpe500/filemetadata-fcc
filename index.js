var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer')
var mongoose = require('mongoose')


const upload = multer({dest: 'uploads/'})


require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.array('upfile'),(req,res)=>{
  console.log("It works")
  console.log(req.files)
  console.log("FILES NAME : "+req.files[0].originalname)
  res.json({
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: req.files[0].size
  })
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
