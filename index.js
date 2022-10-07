const path = require('path');
const express = require('express');
const app = express();


app.get('/',function(req,res){

  res.set({
    'Content-Type': 'text/html',
  })
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(express.static('public'))

app.listen(8002);

