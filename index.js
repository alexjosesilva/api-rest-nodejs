var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
 res.setHeader("Access-Control-Allow-Headers", "content-type");
 res.setHeader("Content-Type", "application/json");
 res.setHeader("Access-Control-Allow-Credentials", true);
 next();
});
//port 9090
app.listen(process.env.PORT, function(){ console.log('Servidor Web rodando na porta 9090') });

app.get('/api', function(req, res){
    fs.readFile('aluno.json', "utf8", function(err, data){
      if (err) {
        var response = {status: "falha", resultado: err};
        res.json(response);
      } else {
        var obj = JSON.parse(data);
        res.json(obj);

      }
    });
   });