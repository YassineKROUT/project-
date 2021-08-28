let express = require('express');
 var str = "";
var idromm="";
var con="";
var length=0;
var tab=new Array();
var Sequelize = require ('sequelize');
let app = express();
var fs = require('fs');
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();
let  parser = require('xml2json');
xml2js = require('xml2js');
let xmlParser = require('xml2json');//pour parser de xml-->json
let convert = require('xml-js');
var js2xmlparser = require("js2xmlparser"); //pour parser json--->xml

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//let xmlParser = require('xml2json');//pour parser de xml-->json



//la methode post pour send data



app.post('/StaticDataRQ', upload.array(), (req, res) => {

    var request = require('request');

    let hotel=[]
    // Set the headers
    var headers = {
        'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/x-www-form-urlencoded'
    }


console.log("connexion reussite")




});

app.listen(3000,'10.10.20.21');