const path = require('path');
const express = require('express');
const app = express();


app.get('/',function(req,res){
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set({
    'Content-Type': 'text/html',
  })
  res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.listen(8000);

