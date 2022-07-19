const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

router.get('/',function(req,res){
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set({
    'Content-Type': 'text/html',
  })
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/fase', router)
app.use(express.static('public'))


module.exports = app;

