const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();


router.get('/fase',function(req,res){
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set({
    'Content-Type': 'text/html',
  })
  res.sendFile(path.join(__dirname+'/index.html'));
});


router.get('/mundos',function(req,res){
  res.sendFile(path.join(__dirname+'/mundos.html'));
});

app.use('/', router)
app.use(express.static('public'))


module.exports = app;

